import * as types from "./types";
import * as designService from "../../services/designService";
import * as gridSelectors from "./selectors";

export const showFeatured = (value) => {
  const action = {
    type: types.SHOW_FEATURED,
    value: value,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesigner = (id) => {
  const action = {
    type: types.SELECT_DESIGNER,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectManufacturer = (id) => {
  const action = {
    type: types.SELECT_MANUFACTURER,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesignType = (id) => {
  const action = {
    type: types.SELECT_DESIGN_TYPE,
    id: id,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const fetchDesigns = () => {
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

const fetchDesignsSuccess = (designs) => {
  return {
    type: types.FETCH_DESIGNS_SUCCESS,
    designs: designs,
  };
};

const fetchDesignsFailure = (error) => {
  return {
    type: types.FETCH_DESIGNS_FAILURE,
    error: error,
  };
};
