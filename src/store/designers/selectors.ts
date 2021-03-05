import { RootState } from "../types";

export const getDesigners = (state: RootState) => {
  return state.designers.designers;
};
