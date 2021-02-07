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
    } catch {
      dispatch(loginFailure());
    }
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const isTokenValid = authService.isLocalStorageTokenValid();
    const token = authService.getLocalStorageToken();
    if (!isTokenValid) {
        dispatch(logout());
        return;
    }
    dispatch(loginSuccess(token));
  };
};

export const logout = () => {
  authService.removeLocalStorageToken();
  return {
    type: actionTypes.LOGOUT,
  };
};
