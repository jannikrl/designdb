export const FETCH_DESIGN_TYPES_START = "FETCH_DESIGN_TYPES_START";
export const FETCH_DESIGN_TYPES_SUCCESS = "FETCH_DESIGN_TYPES_SUCCESS";
export const FETCH_DESIGN_TYPES_FAILURE = "FETCH_DESIGN_TYPES_FAILURE";

export interface DesignType {
  id: number;
  name: string;
}

export interface DesignTypeState {
  types: DesignType[];
  loading: boolean;
  error: string;
}

interface FetchDesignTypesStartAction {
  type: typeof FETCH_DESIGN_TYPES_START;
}

interface FetchDesignTypesSuccessAction {
  type: typeof FETCH_DESIGN_TYPES_SUCCESS;
  types: DesignType[];
}

interface FetchDesignTypesFailureAction {
  type: typeof FETCH_DESIGN_TYPES_FAILURE;
  error: string;
}

export type DesignTypeActions =
  | FetchDesignTypesStartAction
  | FetchDesignTypesSuccessAction
  | FetchDesignTypesFailureAction;
