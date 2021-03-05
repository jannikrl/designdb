import * as types from "./types";

const initialState: types.AuthState = {
  token: null,
  loading: false,
  error: false,
};

const reducer = (
  state = initialState,
  action: types.AuthActionTypes
): types.AuthState => {
  switch (action.type) {
    case types.LOGIN_INIT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
