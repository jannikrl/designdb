import {
  AuthActionTypes,
  LOGIN_FAILURE,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
import * as authService from "../../services/authService";
import * as baseService from "../../services/baseService";
import { ThunkAction } from "../types";

export const login = (email: string, password: string): ThunkAction => {
  return async (dispatch) => {
    dispatch(loginInit());
    try {
      const token = await authService.login(email, password);
      baseService.addTokenAsDefault(token);
      dispatch(loginSuccess(token));
    } catch {
      dispatch(loginFailure());
    }
  };
};

export const autoLogin = (): ThunkAction => {
  return (dispatch) => {
    const token = authService.getLocalStorageToken();
    const isTokenValid = authService.isLocalStorageTokenValid();
    if (!token || !isTokenValid) {
      dispatch(logout());
      return;
    }
    baseService.addTokenAsDefault(token);
    dispatch(loginSuccess(token));
  };
};

const loginInit = (): AuthActionTypes => {
  return {
    type: LOGIN_INIT,
  };
};

const loginSuccess = (token: string): AuthActionTypes => {
  return {
    type: LOGIN_SUCCESS,
    token: token,
  };
};

const loginFailure = (): AuthActionTypes => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = (): AuthActionTypes => {
  authService.removeLocalStorageToken();
  baseService.removeTokenAsDefault();
  return {
    type: LOGOUT,
  };
};
