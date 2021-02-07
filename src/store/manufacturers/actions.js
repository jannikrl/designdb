import * as actionTypes from "./actionTypes";
import * as designerService from "../../services/designerService";

export const fetchManufacturers = () => {
  return async (dispatch) => {
    dispatch(fetchManufacturersStart());
    try {
      const manufacturers = await designerService.fetchManufacturers();
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
