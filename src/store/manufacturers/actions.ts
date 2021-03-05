import * as types from "./types";
import * as manufacturerService from "../../services/manufacturerService";
import { ThunkAction } from "../types";
import { ManufacturersActionTypes } from "../manufacturers/types";
import { Manufacturer } from "../manufacturer/types";

export const fetchManufacturers = (): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchManufacturersStart());
    try {
      const manufacturers = await manufacturerService.fetchManufacturers();
      dispatch(fetchManufacturersSuccess(manufacturers));
    } catch (error) {
      dispatch(fetchManufacturersFailure(error.message));
    }
  };
};

export const fetchManufacturersStart = (): ManufacturersActionTypes => {
  return {
    type: types.FETCH_MANUFACTURERS_START,
  };
};

export const fetchManufacturersSuccess = (
  manufacturers: Manufacturer[]
): ManufacturersActionTypes => {
  return {
    type: types.FETCH_MANUFACTURERS_SUCCESS,
    manufacturers: manufacturers,
  };
};

export const fetchManufacturersFailure = (
  error: string
): ManufacturersActionTypes => {
  return {
    type: types.FETCH_MANUFACTURERS_FAILURE,
    error: error,
  };
};
