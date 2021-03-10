import * as types from "./types";

const initialState: types.DesignState = {
  design: null,
  loading: false,
  error: "",
};

const reducer = (
  state = initialState,
  action: types.DesignActionTypes
): types.DesignState => {
  switch (action.type) {
    case types.FETCH_DESIGN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_DESIGN_SUCCESS:
      return {
        ...state,
        design: action.design,
        loading: false,
      };
    case types.FETCH_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.UPDATE_DESIGN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.UPDATE_DESIGN_SUCCESS:
      return {
        ...state,
        design: action.design,
        loading: false,
      };
    case types.UPDATE_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.CREATE_DESIGN_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.CREATE_DESIGN_SUCCESS:
      return {
        ...state,
        design: action.design,
        loading: false,
      };
    case types.CREATE_DESIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.RESET:
      return initialState;
    default:
      console.log("3");
      return state;
  }
};

export default reducer;
