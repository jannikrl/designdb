import * as types from "./types";

const initialState: types.DesignTypeState = {
  types: [],
  loading: false,
  error: "",
};

const reducer = (
  state = initialState,
  action: types.DesignTypeActions
): types.DesignTypeState => {
  switch (action.type) {
    case types.FETCH_DESIGN_TYPES_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_DESIGN_TYPES_SUCCESS:
      return {
        ...state,
        types: action.types,
        loading: false,
      };
    case types.FETCH_DESIGN_TYPES_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
