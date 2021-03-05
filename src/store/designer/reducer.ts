import * as types from "./types";

const initialState: types.DesignerState = {
  designer: null,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action: types.DesignerActionTypes): types.DesignerState => {
  switch (action.type) {
    case types.FETCH_DESIGNER_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_DESIGNER_SUCCESS:
      return {
        ...state,
        designer: action.designer,
        loading: false,
      };
    case types.FETCH_DESIGNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.UPDATE_DESIGNER_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.UPDATE_DESIGNER_SUCCESS:
      return {
        ...state,
        designer: action.designer,
        loading: false,
      };
    case types.UPDATE_DESIGNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.CREATE_DESIGNER_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.CREATE_DESIGNER_SUCCESS:
      return {
        ...state,
        designer: action.designer,
        loading: false,
      };
    case types.CREATE_DESIGNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
