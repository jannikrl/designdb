import { Design } from "../design/types";

export const HOME_GRID_SHOW_FEATURED = "HOME_GRID_SHOW_FEATURED";
export const HOME_GRID_SELECT_DESIGNER = "HOME_GRID_SELECT_DESIGNER";
export const HOME_GRID_SELECT_DESIGN_TYPE = "HOME_GRID_SELECT_DESIGN_TYPE";
export const HOME_GRID_SELECT_MANUFACTURER = "HOME_GRID_SELECT_MANUFACTURER";
export const HOME_GRID_FETCH_DESIGNS_START = "HOME_GRID_FETCH_DESIGNS_START";
export const HOME_GRID_FETCH_DESIGNS_SUCCESS = "HOME_GRID_FETCH_DESIGNS_SUCCESS";
export const HOME_GRID_FETCH_DESIGNS_FAILURE = "HOME_GRID_FETCH_DESIGNS_FAILURE";

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
  type: typeof HOME_GRID_SHOW_FEATURED;
  value: boolean;
}

interface SelectDesignerAction {
  type: typeof HOME_GRID_SELECT_DESIGNER;
  id: number;
}

interface SelectManufacturerAction {
  type: typeof HOME_GRID_SELECT_MANUFACTURER;
  id: number;
}

interface SelectDesignTypeAction {
  type: typeof HOME_GRID_SELECT_DESIGN_TYPE;
  id: number;
}

interface FetchDesignsStartAction {
  type: typeof HOME_GRID_FETCH_DESIGNS_START;
}

interface FetchDesignsSuccessAction {
  type: typeof HOME_GRID_FETCH_DESIGNS_SUCCESS;
  designs: Design[];
}

interface FetchDesignsFailureAction {
  type: typeof HOME_GRID_FETCH_DESIGNS_FAILURE;
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
