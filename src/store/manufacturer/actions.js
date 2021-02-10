import * as actionTypes from "./actionTypes";
import * as imageService from "../../services/imageService";
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

export const updateManufacturer = (values) => {
  return async (dispatch) => {
    dispatch(updateManufacturerStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const manufacturer = await manufacturerService.updateManufacturer(values);
      dispatch(updateManufacturerSuccess(manufacturer));
    } catch (error) {
      dispatch(updateManufacturerFailure(error.message));
    }
  };
};

export const createManufacturer = (values) => {
  return async (dispatch) => {
    dispatch(updateManufacturerStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const manufacturer = await manufacturerService.createManufacturer(values);
      dispatch(updateManufacturerSuccess(manufacturer));
    } catch (error) {
      dispatch(updateManufacturerFailure(error.message));
    }
  };
};

const updateManufacturerStart = () => {
    return {
      type: actionTypes.UPDATE_MANUFACTURER_START,
    };
  };
  
  const updateManufacturerSuccess = (manufacturer) => {
    return {
      type: actionTypes.UPDATE_MANUFACTURER_SUCCESS,
      manufacturer: manufacturer,
    };
  };
  
  const updateManufacturerFailure = (error) => {
    return {
      type: actionTypes.UPDATE_MANUFACTURER_FAILURE,
      error: error,
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
