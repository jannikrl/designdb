import * as types from "./types";
import * as designService from "../../services/designService";
import * as selectors from "./selectors";
import { ThunkAction } from "../types";
import { Design } from "../design/types";

export const showFeatured = (value: boolean): ThunkAction => {
  const action = {
    type: types.HOME_GRID_SHOW_FEATURED,
    value: value,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesigner = (id: number): ThunkAction => {
  const action = {
    type: types.HOME_GRID_SELECT_DESIGNER,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectManufacturer = (id: number): ThunkAction => {
  const action = {
    type: types.HOME_GRID_SELECT_MANUFACTURER,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesignType = (id: number): ThunkAction => {
  const action = {
    type: types.HOME_GRID_SELECT_DESIGN_TYPE,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const fetchDesigns = (): ThunkAction => {
  return async (dispatch, getState) => {
    const state = getState();
    const filterOptions = selectors.getFilterOptions(state);

    dispatch(fetchDesignsStart());
    try {
      const designs = await designService.fetchDesigns(filterOptions);
      dispatch(fetchDesignsSuccess(designs));
    } catch (error) {
      dispatch(fetchDesignsFailure(error));
    }
  };
};

const fetchDesignsStart = (): types.DesignsActionTypes => {
  return {
    type: types.HOME_GRID_FETCH_DESIGNS_START,
  };
};

const fetchDesignsSuccess = (designs: Design[]): types.DesignsActionTypes => {
  return {
    type: types.HOME_GRID_FETCH_DESIGNS_SUCCESS,
    designs: designs,
  };
};

const fetchDesignsFailure = (error: string): types.DesignsActionTypes => {
  return {
    type: types.HOME_GRID_FETCH_DESIGNS_FAILURE,
    error: error,
  };
};