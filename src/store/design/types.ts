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
  name: string;
  image: string;
  imageReference: string;
  imageFile: File;
  alsoKnownAs: string;
  alsoKnownAsOriginCountry: string;
  originCountry: string;
  model: string;
  yearFrom: number;
  yearTo: number;
  designerId: number;
  manufacturerId: number;
  isFeatured: boolean;
  manufacturerUrl: string;
  manufacturerDescription: string;
  wikipediaUrl: string;
  recognitions: string;
  notes: string;
  typeId: number;
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
