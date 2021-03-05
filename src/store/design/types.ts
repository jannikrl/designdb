export const FETCH_DESIGN_START = "FETCH_DESIGN_START";
export const FETCH_DESIGN_SUCCESS = "FETCH_DESIGN_SUCCESS";
export const FETCH_DESIGN_FAILURE = "FETCH_DESIGN_FAILURE";
export const UPDATE_DESIGN_START = "UPDATE_DESIGN_START";
export const UPDATE_DESIGN_SUCCESS = "UPDATE_DESIGN_SUCCESS";
export const UPDATE_DESIGN_FAILURE = "UPDATE_DESIGN_FAILURE";
export const CREATE_DESIGN_START = "CREATE_DESIGN_START";
export const CREATE_DESIGN_SUCCESS = "CREATE_DESIGN_SUCCESS";
export const CREATE_DESIGN_FAILURE = "CREATE_DESIGN_FAILURE";
export const RESET = "RESET";

export interface Design {
  id: number;
  name: string;
  image: string | null;
  imageReference: string | null;
  alsoKnownAs: string | null;
  alsoKnownAsOriginCountry: string | null;
  originCountry: string | null;
  model: string | null;
  yearFrom: number | null;
  yearTo: number | null;
  designerId: number | null;
  manufacturerId: number | null;
  isFeatured: boolean | null;
  manufacturerUrl: string | null;
  manufacturerDescription: string | null;
  wikipediaUrl: string | null;
  recognitions: string | null;
  notes: string | null;
  typeId: number | null;
  designer?: { id: number; name: string }; // @Todo: Update when designer type is created
  manufacturer?: { id: number; name: string }; // @Todo: Update when manufacturer type is created
}

export interface DesignState {
  design: Design | null;
  loading: boolean;
  error: string;
}

interface FetchDesignStartAction {
  type: typeof FETCH_DESIGN_START;
}

interface FetchDesignSuccessAction {
  type: typeof FETCH_DESIGN_SUCCESS;
  design: Design;
}

interface FetchDesignFailureAction {
  type: typeof FETCH_DESIGN_FAILURE;
  error: string;
}

interface UpdateDesignStartAction {
  type: typeof UPDATE_DESIGN_START;
}

interface UpdateDesignSuccessAction {
  type: typeof UPDATE_DESIGN_SUCCESS;
  design: Design;
}

interface UpdateDesignFailureAction {
  type: typeof UPDATE_DESIGN_FAILURE;
  error: string;
}

interface CreateDesignStartAction {
  type: typeof CREATE_DESIGN_START;
}

interface CreateDesignSuccessAction {
  type: typeof CREATE_DESIGN_SUCCESS;
  design: Design;
}

interface CreateDesignFailureAction {
  type: typeof CREATE_DESIGN_FAILURE;
  error: string;
}

interface ResetAction {
  type: typeof RESET;
}

export type DesignActionTypes =
  | FetchDesignStartAction
  | FetchDesignSuccessAction
  | FetchDesignFailureAction
  | UpdateDesignStartAction
  | UpdateDesignSuccessAction
  | UpdateDesignFailureAction
  | CreateDesignStartAction
  | CreateDesignSuccessAction
  | CreateDesignFailureAction
  | ResetAction;
