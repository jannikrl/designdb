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

const updateManufacturerStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const updateManufacturerSuccess = (state, action) => {
  return {
    ...state,
    manufacturer: action.manufacturer,
    loading: false,
  };
};

const updateManufacturerFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const createManufacturerStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const createManufacturerSuccess = (state, action) => {
  return {
    ...state,
    manufacturer: action.manufacturer,
    loading: false,
  };
};

const createManufacturerFailure = (state, action) => {
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
    case actionTypes.UPDATE_MANUFACTURER_START:
      return updateManufacturerStart(state, action);
    case actionTypes.UPDATE_MANUFACTURER_SUCCESS:
      return updateManufacturerSuccess(state, action);
    case actionTypes.UPDATE_MANUFACTURER_FAILURE:
      return updateManufacturerFailure(state, action);
    case actionTypes.CREATE_MANUFACTURER_START:
      return createManufacturerStart(state, action);
    case actionTypes.CREATE_MANUFACTURER_SUCCESS:
      return createManufacturerSuccess(state, action);
    case actionTypes.CREATE_MANUFACTURER_FAILURE:
      return createManufacturerFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
