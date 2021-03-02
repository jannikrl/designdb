import { RootState } from "../types";

export const getDesign = (state: RootState) => {
  return state.design.design;
};

export const isLoading = (state: RootState) => {
  return state.design.loading;
};

export const getError = (state: RootState) => {
  return state.design.error;
};
