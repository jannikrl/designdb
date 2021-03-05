import * as types from "./types";

const initialState: types.ManufacturersState = {
  manufacturers: [],
  loading: false,
  error: "",
};

const reducer = (
  state = initialState,
  action: types.ManufacturersActionTypes
): types.ManufacturersState => {
  switch (action.type) {
    case types.FETCH_MANUFACTURERS_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        manufacturers: action.manufacturers,
        loading: false,
      };
    case types.FETCH_MANUFACTURERS_FAILURE:
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
