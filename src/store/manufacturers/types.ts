import { Manufacturer } from "../manufacturer/types";

export const FETCH_MANUFACTURERS_START = "FETCH_MANUFACTURERS_START";
export const FETCH_MANUFACTURERS_SUCCESS = "FETCH_MANUFACTURERS_SUCCESS";
export const FETCH_MANUFACTURERS_FAILURE = "FETCH_MANUFACTURERS_FAILURE";

export interface ManufacturersState {
  manufacturers: Manufacturer[];
  loading: boolean;
  error: string;
}

interface FetchManufacturerStartAction {
  type: typeof FETCH_MANUFACTURERS_START;
}

interface FetchManufacturerSuccessAction {
  type: typeof FETCH_MANUFACTURERS_SUCCESS;
  manufacturers: Manufacturer[];
}

interface FetchManufacturerFailureAction {
  type: typeof FETCH_MANUFACTURERS_FAILURE;
  error: string;
}

export type ManufacturersActionTypes =
  | FetchManufacturerStartAction
  | FetchManufacturerSuccessAction
  | FetchManufacturerFailureAction;
