import * as actionTypes from "./actionTypes";

const initialState = {
  manufacturers: [],
  loading: false,
  error: null,
};

const fetchManufacturersStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchManufacturersSuccess = (state, action) => {
  return {
    ...state,
    manufacturers: action.manufacturers,
    loading: false,
  };
};

const fetchManufacturersFailure = (state, action) => {
  return {
    ...state,
    manufacturers: action.manufacturers,
    error: action.error,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MANUFACTURERS_START:
      return fetchManufacturersStart(state, action);
    case actionTypes.FETCH_MANUFACTURERS_SUCCESS:
      return fetchManufacturersSuccess(state, action);
    case actionTypes.FETCH_MANUFACTURERS_FAILURE:
      return fetchManufacturersFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
