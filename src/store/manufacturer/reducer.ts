import {
  ManufacturerActionTypes,
  ManufacturerState,
  CREATE_MANUFACTURER_FAILURE,
  CREATE_MANUFACTURER_START,
  CREATE_MANUFACTURER_SUCCESS,
  FETCH_MANUFACTURER_FAILURE,
  FETCH_MANUFACTURER_START,
  FETCH_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER_FAILURE,
  UPDATE_MANUFACTURER_START,
  UPDATE_MANUFACTURER_SUCCESS,
} from "./types";

const initialState: ManufacturerState = {
  manufacturer: null,
  loading: false,
  error: "",
};

const reducer = (
  state = initialState,
  action: ManufacturerActionTypes
): ManufacturerState => {
  switch (action.type) {
    case FETCH_MANUFACTURER_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_MANUFACTURER_SUCCESS:
      return {
        ...state,
        manufacturer: action.manufacturer,
        loading: false,
      };
    case FETCH_MANUFACTURER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_MANUFACTURER_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case UPDATE_MANUFACTURER_SUCCESS:
      return {
        ...state,
        manufacturer: action.manufacturer,
        loading: false,
      };
    case UPDATE_MANUFACTURER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_MANUFACTURER_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case CREATE_MANUFACTURER_SUCCESS:
      return {
        ...state,
        manufacturer: action.manufacturer,
        loading: false,
      };
    case CREATE_MANUFACTURER_FAILURE:
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
