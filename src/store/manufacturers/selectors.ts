import { RootState } from "../types";

export const getManufacturers = (state: RootState) => {
  return state.manufacturers.manufacturers;
};
