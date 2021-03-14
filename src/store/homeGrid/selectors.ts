import { RootState } from "../types";

export const getDesigns = (state: RootState) => {
  return state.homeGrid.designs;
};

export const isLoading = (state: RootState) => {
  return state.homeGrid.loading;
};

export const getFilterOptions = (state: RootState) => {
  return state.homeGrid.filterOptions;
};

export const getShowFeatured = (state: RootState) => {
  return state.homeGrid.filterOptions.showFeatured;
};

export const getSelectedDesigner = (state: RootState) => {
  return state.homeGrid.filterOptions.designer;
};

export const getSelectedManufacturer = (state: RootState) => {
  return state.homeGrid.filterOptions.manufacturer;
};

export const getSelectedDesignType = (state: RootState) => {
  return state.homeGrid.filterOptions.type;
};
