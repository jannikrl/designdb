import { RootState } from "../types";

export const getDesigner = (store: RootState) => {
  return store.designer.designer;
};

export const isLoading = (state: RootState) => {
  return state.designer.loading;
};

export const getError = (state: RootState) => {
  return state.designer.error;
};
