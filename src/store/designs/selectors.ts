import { RootState } from "../types";

export const getDesigns = (state: RootState) => {
  return state.designs.designs;
};

export const isLoading = (state: RootState) => {
  return state.designs.loading;
};

export const getFilterOptions = (state: RootState) => {
  return state.designs.filterOptions;
};

export const getShowFeatured = (state: RootState) => {
  return state.designs.filterOptions.showFeatured;
};

export const getSelectedDesigner = (state: RootState) => {
  return state.designs.filterOptions.designer;
};

export const getSelectedManufacturer = (state: RootState) => {
  return state.designs.filterOptions.manufacturer;
};

export const getSelectedDesignType = (state: RootState) => {
  return state.designs.filterOptions.type;
};
