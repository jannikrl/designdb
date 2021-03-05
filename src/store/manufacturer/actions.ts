import * as types from "./types";
import * as imageService from "../../services/imageService";
import * as manufacturerService from "../../services/manufacturerService";
import { ThunkAction } from "../types";
import { ManufacturerFormValues } from "../../components/Forms/ManufacturerForm/ManufacturerForm";

export const fetchManufacturer = (id: number): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchManufacturerStart());
    try {
      const manufacturer = await manufacturerService.fetchManufacturer(id);
      dispatch(fetchManufacturerSuccess(manufacturer));
    } catch (error) {
      dispatch(fetchManufacturerFailure(error.message));
    }
  };
};

export const updateManufacturer = (values: ManufacturerFormValues): ThunkAction => {
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

export const createManufacturer = (values: ManufacturerFormValues): ThunkAction => {
  return async (dispatch) => {
    dispatch(createManufacturerStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const manufacturer = await manufacturerService.createManufacturer(values);
      dispatch(createManufacturerSuccess(manufacturer));
    } catch (error) {
      dispatch(createManufacturerFailure(error.message));
    }
  };
};

const fetchManufacturerStart = (): types.ManufacturerActionTypes => {
  return {
    type: types.FETCH_MANUFACTURER_START,
  };
};

const fetchManufacturerSuccess = (
  manufacturer: types.Manufacturer
): types.ManufacturerActionTypes => {
  return {
    type: types.FETCH_MANUFACTURER_SUCCESS,
    manufacturer: manufacturer,
  };
};

const fetchManufacturerFailure = (
  error: string
): types.ManufacturerActionTypes => {
  return {
    type: types.FETCH_MANUFACTURER_FAILURE,
    error: error,
  };
};

const updateManufacturerStart = (): types.ManufacturerActionTypes => {
  return {
    type: types.UPDATE_MANUFACTURER_START,
  };
};

const updateManufacturerSuccess = (
  manufacturer: types.Manufacturer
): types.ManufacturerActionTypes => {
  return {
    type: types.UPDATE_MANUFACTURER_SUCCESS,
    manufacturer: manufacturer,
  };
};

const updateManufacturerFailure = (
  error: string
): types.ManufacturerActionTypes => {
  return {
    type: types.UPDATE_MANUFACTURER_FAILURE,
    error: error,
  };
};

const createManufacturerStart = (): types.ManufacturerActionTypes => {
  return {
    type: types.CREATE_MANUFACTURER_START,
  };
};

const createManufacturerSuccess = (
  manufacturer: types.Manufacturer
): types.ManufacturerActionTypes => {
  return {
    type: types.CREATE_MANUFACTURER_SUCCESS,
    manufacturer: manufacturer,
  };
};

const createManufacturerFailure = (
  error: string
): types.ManufacturerActionTypes => {
  return {
    type: types.CREATE_MANUFACTURER_FAILURE,
    error: error,
  };
};
