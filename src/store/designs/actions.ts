import * as types from "./types";
import * as designService from "../../services/designService";
import * as gridSelectors from "./selectors";
import { ThunkAction } from "../types";
import { Design } from "../design/types";

export const showFeatured = (value: boolean): ThunkAction => {
  const action = {
    type: types.SHOW_FEATURED,
    value: value,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesigner = (id: number): ThunkAction => {
  const action = {
    type: types.SELECT_DESIGNER,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectManufacturer = (id: number): ThunkAction => {
  const action = {
    type: types.SELECT_MANUFACTURER,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesignType = (id: number): ThunkAction => {
  const action = {
    type: types.SELECT_DESIGN_TYPE,
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
    const filterOptions = gridSelectors.getFilterOptions(state);

    dispatch(fetchDesignsStart());
    try {
      const designs = await designService.fetchDesigns(filterOptions);
      dispatch(fetchDesignsSuccess(designs));
    } catch (error) {
      dispatch(fetchDesignsFailure(error));
    }
  };
};

const fetchDesignsStart = () => {
  return {
    type: types.FETCH_DESIGNS_START,
  };
};

const fetchDesignsSuccess = (designs: Design[]) => {
  return {
    type: types.FETCH_DESIGNS_SUCCESS,
    designs: designs,
  };
};

const fetchDesignsFailure = (error: string) => {
  return {
    type: types.FETCH_DESIGNS_FAILURE,
    error: error,
  };
};
