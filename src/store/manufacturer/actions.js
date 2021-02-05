import * as actionTypes from "./actionTypes";
import * as manufacturerService from "../../services/manufacturerService";

export const fetchManufacturer = (id) => {
  return async (dispatch) => {
    dispatch(fetchManufacturerStart());
    try {
      const manufacturer = await manufacturerService.fetchManufacturer(id);
      dispatch(fetchManufacturerSuccess(manufacturer));
    } catch (error) {
      dispatch(fetchManufacturerFailure());
    }
  };
};

const fetchManufacturerStart = () => {
  return {
    type: actionTypes.FETCH_MANUFACTURER_START,
  };
};

const fetchManufacturerSuccess = (manufacturer) => {
  return {
    type: actionTypes.FETCH_MANUFACTURER_SUCCESS,
    manufacturer: manufacturer,
  };
};

const fetchManufacturerFailure = (error) => {
  return {
    type: actionTypes.FETCH_MANUFACTURER_FAILURE,
    error: error,
  };
};
