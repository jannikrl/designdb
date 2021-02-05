import * as actionTypes from "./actionTypes";

const initialState = {
  manufacturer: null,
  loading: false,
  error: null,
};

const fetchManufacturerStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchManufacturerSuccess = (state, action) => {
  return {
    ...state,
    manufacturer: action.manufacturer,
    loading: false,
  };
};

const fetchManufacturerFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MANUFACTURER_START:
      return fetchManufacturerStart(state, action);
    case actionTypes.FETCH_MANUFACTURER_SUCCESS:
      return fetchManufacturerSuccess(state, action);
    case actionTypes.FETCH_MANUFACTURER_FAILURE:
      return fetchManufacturerFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
