export const LOGIN_INIT = "LOGIN_INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const AUTH_INIT = "AUTH_INIT";

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: boolean;
}

interface LoginInitAction {
  type: typeof LOGIN_INIT;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  token: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface InitialAction {
  type: typeof AUTH_INIT;
}

export type AuthActionTypes =
  | LoginInitAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | InitialAction;
