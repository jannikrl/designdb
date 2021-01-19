import * as actionTypes from "./actionTypes";
import * as designService from "../../services/designService";
import * as designerService from "../../services/designerService";
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
  return (dispatch, getState) => {
    const state = getState();
    const filterOptions = gridSelectors.getFilterOptions(state);

    const designs = designService.getDesigns(filterOptions);
    dispatch(fetchDesignsSuccess(designs));
  };
};

export const fetchDesignsSuccess = (designs) => {
  return {
    type: actionTypes.FETCH_DESIGNS_SUCCESS,
    designs: designs,
  };
};

export const fetchDesigners = () => {
  return (dispatch) => {
    const designers = designerService.getDesigners();
    dispatch(fetchDesignersSuccess(designers));
  };
};

export const fetchDesignersSuccess = (designers) => {
  return {
    type: actionTypes.FETCH_DESIGNERS_SUCCESS,
    designers: designers,
  };
};
