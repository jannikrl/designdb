import * as actionTypes from "./actionTypes";
import * as authService from "../../services/authService";

const loginInit = () => {
  return {
    type: actionTypes.LOGIN_INIT,
  };
};

const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
  };
};

const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginInit());
    try {
      const token = await authService.login(email, password);
      dispatch(loginSuccess(token));
      localStorage.setItem("token", token);
      localStorage.setItem(
        "expiryDate",
        new Date().setFullYear(new Date().getFullYear() + 1)
      );
    } catch {
      dispatch(loginFailure());
    }
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    const isTokenExpiried = expiryDate < new Date();
    if (!token || isTokenExpiried) {
        dispatch(logout());
        return;
    }
    dispatch(loginSuccess(token));
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.LOGOUT,
  };
};
