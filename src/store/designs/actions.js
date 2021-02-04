import * as actionTypes from "./actionTypes";
import * as designService from "../../services/designService";
import * as gridSelectors from "./selectors";

export const showFeatured = (value) => {
  const action = {
    type: actionTypes.SHOW_FEATURED,
    value: value,
  };

  return (dispatch) => {
    dispatch(action);
    dispatch(fetchDesigns());
  };
};

export const selectDesigner = (id) => {
  const action = {
    type: actionTypes.SELECT_DESIGNER,
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

    const designs = await designService.fetchDesigns(filterOptions);
    
    dispatch(fetchDesignsSuccess(designs));
  };
};

export const fetchDesignsSuccess = (designs) => {
  return {
    type: actionTypes.FETCH_DESIGNS_SUCCESS,
    designs: designs,
  };
};