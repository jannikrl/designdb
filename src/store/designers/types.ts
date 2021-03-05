import { Designer } from "../designer/types";

export const FETCH_DESIGNERS_START = "FETCH_DESIGNERS_START";
export const FETCH_DESIGNERS_SUCCESS = "FETCH_DESIGNERS_SUCCESS";
export const FETCH_DESIGNERS_FAILURE = "FETCH_DESIGNERS_FAILURE";

export interface DesignersState {
    designers: Designer[],
    error: string,
    loading: boolean,
}

interface FetchDesignersStartAction {
  type: typeof FETCH_DESIGNERS_START;
}

interface FetchDesignersSuccessAction {
  type: typeof FETCH_DESIGNERS_SUCCESS;
  designers: Designer[];
}

interface FetchDesignersFailureAction {
  type: typeof FETCH_DESIGNERS_FAILURE;
  error: string;
}

export type DesignersActionTypes =
  | FetchDesignersStartAction
  | FetchDesignersSuccessAction
  | FetchDesignersFailureAction;
