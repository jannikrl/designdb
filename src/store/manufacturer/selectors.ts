import { RootState } from "../types";

export const getManufacturer = (store: RootState) => {
  return store.manufacturer.manufacturer;
};

export const isLoading = (state: RootState) => {
  return state.manufacturer.loading;
};

export const getError = (state: RootState) => {
  return state.manufacturer.error;
};
