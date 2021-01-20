import * as actionTypes from "./actionTypes";
import * as authService from "../../services/authService";

const authInit = () => {
  return {
    type: actionTypes.AUTH_INIT,
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

const authFailure = () => {
  return {
    type: actionTypes.AUTH_FAILURE,
  };
};

export const auth = (email, password) => {
  return async (dispatch) => {
    dispatch(authInit());
    try {
      const response = await authService.auth(email, password);
      const token = response.token;
      const userId = response.userId;
      dispatch(authSuccess(token, userId));
    } catch {
      dispatch(authFailure());
    }
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
