export const FETCH_MANUFACTURER_START = "FETCH_MANUFACTURER_START";
export const FETCH_MANUFACTURER_SUCCESS = "FETCH_MANUFACTURER_SUCCESS";
export const FETCH_MANUFACTURER_FAILURE = "FETCH_MANUFACTURER_FAILURE";
export const UPDATE_MANUFACTURER_START = "UPDATE_MANUFACTURER_START";
export const UPDATE_MANUFACTURER_SUCCESS = "UPDATE_MANUFACTURER_SUCCESS";
export const UPDATE_MANUFACTURER_FAILURE = "UPDATE_MANUFACTURER_FAILURE";
export const CREATE_MANUFACTURER_START = "CREATE_MANUFACTURER_START";
export const CREATE_MANUFACTURER_SUCCESS = "CREATE_MANUFACTURER_SUCCESS";
export const CREATE_MANUFACTURER_FAILURE = "CREATE_MANUFACTURER_FAILURE";

export interface Manufacturer {
  id: number;
  name: string;
  image: string;
}

export interface ManufacturerState {
  manufacturer: Manufacturer | null;
  loading: boolean;
  error: string;
}

interface FetchManufacturerStartAction {
  type: typeof FETCH_MANUFACTURER_START;
}

interface FetchManufacturerSuccessAction {
  type: typeof FETCH_MANUFACTURER_SUCCESS;
  manufacturer: Manufacturer;
}

interface FetchManufacturerFailureAction {
  type: typeof FETCH_MANUFACTURER_FAILURE;
  error: string;
}

interface UpdateManufacturerStartAction {
  type: typeof UPDATE_MANUFACTURER_START;
}

interface UpdateManufacturerSuccessAction {
  type: typeof UPDATE_MANUFACTURER_SUCCESS;
  manufacturer: Manufacturer;
}

interface UpdateManufacturerFailureAction {
  type: typeof UPDATE_MANUFACTURER_FAILURE;
  error: string;
}

interface CreateManufacturerStartAction {
  type: typeof CREATE_MANUFACTURER_START;
}

interface CreateManufacturerSuccessAction {
  type: typeof CREATE_MANUFACTURER_SUCCESS;
  manufacturer: Manufacturer;
}

interface CreateManufacturerFailureAction {
  type: typeof CREATE_MANUFACTURER_FAILURE;
  error: string;
}

export type ManufacturerActionTypes =
  | FetchManufacturerStartAction
  | FetchManufacturerSuccessAction
  | FetchManufacturerFailureAction
  | UpdateManufacturerStartAction
  | UpdateManufacturerSuccessAction
  | UpdateManufacturerFailureAction
  | CreateManufacturerStartAction
  | CreateManufacturerSuccessAction
  | CreateManufacturerFailureAction;
