import {
  DesignState,
  FETCH_DESIGN_START,
  FETCH_DESIGN_SUCCESS,
  FETCH_DESIGN_FAILURE,
  UPDATE_DESIGN_START,
  UPDATE_DESIGN_SUCCESS,
  UPDATE_DESIGN_FAILURE,
  CREATE_DESIGN_START,
  CREATE_DESIGN_SUCCESS,
  CREATE_DESIGN_FAILURE,
  RESET,
  DesignActionTypes,
} from "./types";

const initialState: DesignState = {
  design: null,
  loading: false,
  error: "",
};

const reducer = (
  state = initialState,
  action: DesignActionTypes
): DesignState => {
  switch (action.type) {
    case FETCH_DESIGN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_DESIGN_SUCCESS:
      return {
        ...state,
        design: action.design,
        loading: false,
      };
    case FETCH_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_DESIGN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case UPDATE_DESIGN_SUCCESS:
      return {
        ...state,
        design: action.design,
        loading: false,
      };
    case UPDATE_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_DESIGN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CREATE_DESIGN_SUCCESS:
      return {
        ...state,
        design: action.design,
        loading: false,
      };
    case CREATE_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
