import * as types from "./types";

const initialState: types.DesignersState = {
  designers: [],
  loading: false,
  error: "",
};

const reducer = (
  state = initialState,
  action: types.DesignersActionTypes
): types.DesignersState => {
  switch (action.type) {
    case types.FETCH_DESIGNERS_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_DESIGNERS_SUCCESS:
      return {
        ...state,
        designers: action.designers,
        loading: false,
      };
    case types.FETCH_DESIGNERS_FAILURE:
      return {
        ...state,
        designers: [],
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
