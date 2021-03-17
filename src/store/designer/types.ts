import { Manufacturer } from "../manufacturer/types";

export const FETCH_DESIGNER_START = "FETCH_DESIGNER_START";
export const FETCH_DESIGNER_SUCCESS = "FETCH_DESIGNER_SUCCESS";
export const FETCH_DESIGNER_FAILURE = "FETCH_DESIGNER_FAILURE";
export const UPDATE_DESIGNER_START = "UPDATE_DESIGNER_START";
export const UPDATE_DESIGNER_SUCCESS = "UPDATE_DESIGNER_SUCCESS";
export const UPDATE_DESIGNER_FAILURE = "UPDATE_DESIGNER_FAILURE";
export const CREATE_DESIGNER_START = "CREATE_DESIGNER_START";
export const CREATE_DESIGNER_SUCCESS = "CREATE_DESIGNER_SUCCESS";
export const CREATE_DESIGNER_FAILURE = "CREATE_DESIGNER_FAILURE";

export interface Designer {
  id: number;
  name: string;
  image: string | null;
  bornYear: number | null;
  diedYear: number | null;
  bornCity: string | null;
  diedCity: string | null;
  bornCountry: string | null;
  diedCountry: string | null;
  description: string | null;
  descriptionReference: string | null;
  descriptionManufacturerId: number | null;
  descriptionManufacturer: Manufacturer | null;
}

export interface DesignerState {
  designer: Designer | null;
  loading: boolean;
  error: string;
}

interface FetchDesignerStartAction {
  type: typeof FETCH_DESIGNER_START;
}

interface FetchDesignerSuccessAction {
  type: typeof FETCH_DESIGNER_SUCCESS;
  designer: Designer;
}

interface FetchDesignerFailureAction {
  type: typeof FETCH_DESIGNER_FAILURE;
  error: string;
}

interface UpdateDesignerStartAction {
  type: typeof UPDATE_DESIGNER_START;
}

interface UpdateDesignerSuccessAction {
  type: typeof UPDATE_DESIGNER_SUCCESS;
  designer: Designer;
}

interface UpdateDesignerFailure {
  type: typeof UPDATE_DESIGNER_FAILURE;
  error: string;
}

interface CreateDesignerStartAction {
  type: typeof CREATE_DESIGNER_START;
}

interface CreateDesignerSuccessAction {
  type: typeof CREATE_DESIGNER_SUCCESS;
  designer: Designer;
}

interface CreateDesignerFailureAction {
  type: typeof CREATE_DESIGNER_FAILURE;
  error: string;
}

export type DesignerActionTypes =
  | FetchDesignerStartAction
  | FetchDesignerSuccessAction
  | FetchDesignerFailureAction
  | UpdateDesignerStartAction
  | UpdateDesignerSuccessAction
  | UpdateDesignerFailure
  | CreateDesignerStartAction
  | CreateDesignerSuccessAction
  | CreateDesignerFailureAction;
