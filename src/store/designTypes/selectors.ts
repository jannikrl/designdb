import { RootState } from "../types";

export const getTypes = (state: RootState) => {
  return state.designTypes.types;
};
