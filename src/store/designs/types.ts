import { Design } from "../design/types";

export const SHOW_FEATURED = "SHOW_FEATURED";
export const SELECT_DESIGNER = "SELECT_DESIGNER";
export const SELECT_DESIGN_TYPE = "SELECT_DESIGN_TYPE";
export const SELECT_MANUFACTURER = "SELECT_MANUFACTURER";
export const FETCH_DESIGNS_START = "FETCH_DESIGNS_START";
export const FETCH_DESIGNS_SUCCESS = "FETCH_DESIGNS_SUCCESS";
export const FETCH_DESIGNS_FAILURE = "FETCH_DESIGNS_FAILURE";

export interface DesignsState {
  designs: Design[];
  loading: boolean;
  error: string;
  filterOptions: FilterOptions;
}

export interface FilterOptions {
  showFeatured: boolean;
  designer: number | null;
  manufacturer: number | null;
  type: number | null;
}

interface ShowFeaturedAction {
  type: typeof SHOW_FEATURED;
  value: boolean;
}

interface SelectDesignerAction {
  type: typeof SELECT_DESIGNER;
  id: number;
}

interface SelectManufacturerAction {
  type: typeof SELECT_MANUFACTURER;
  id: number;
}

interface SelectDesignTypeAction {
  type: typeof SELECT_DESIGN_TYPE;
  id: number;
}

interface FetchDesignsStartAction {
  type: typeof FETCH_DESIGNS_START;
}

interface FetchDesignsSuccessAction {
  type: typeof FETCH_DESIGNS_SUCCESS;
  designs: Design[];
}

interface FetchDesignsFailureAction {
  type: typeof FETCH_DESIGNS_FAILURE;
  error: string;
}

export type DesignsActionTypes =
  | ShowFeaturedAction
  | SelectDesignerAction
  | SelectManufacturerAction
  | SelectDesignTypeAction
  | FetchDesignsStartAction
  | FetchDesignsSuccessAction
  | FetchDesignsFailureAction;
