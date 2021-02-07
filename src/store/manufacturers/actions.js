import * as actionTypes from "./actionTypes";
import * as manufacturerService from "../../services/manufacturerService";

export const fetchManufacturers = () => {
  return async (dispatch) => {
    dispatch(fetchManufacturersStart());
    try {
      const manufacturers = await manufacturerService.fetchManufacturers();
      dispatch(fetchManufacturersSuccess(manufacturers));
    } catch {
      dispatch(fetchManufacturersFailure());
    }
  };
};

export const fetchManufacturersStart = (manufacturers) => {
  return {
    type: actionTypes.FETCH_MANUFACTURERS_START,
    manufacturers: manufacturers,
  };
};

export const fetchManufacturersSuccess = (manufacturers) => {
  return {
    type: actionTypes.FETCH_MANUFACTURERS_SUCCESS,
    manufacturers: manufacturers,
  };
};

export const fetchManufacturersFailure = () => {
  return {
    type: actionTypes.FETCH_MANUFACTURERS_FAILURE,
  };
};
