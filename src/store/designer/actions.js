import * as actionTypes from "./actionTypes";
import * as designerService from "../../services/designerService";

export const fetchDesigner = (id) => {
  return async (dispatch) => {
    dispatch(fetchDesignerStart());
    try {
      const designer = await designerService.fetchDesigner(id);
      dispatch(fetchDesignerSuccess(designer));
    } catch (error) {
      dispatch(fetchDesignerFailure());
    }
  };
};

const fetchDesignerStart = () => {
  return {
    type: actionTypes.FETCH_DESIGNER_START,
  };
};

const fetchDesignerSuccess = (designer) => {
  return {
    type: actionTypes.FETCH_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const fetchDesignerFailure = (error) => {
  return {
    type: actionTypes.FETCH_DESIGNER_FAILURE,
    error: error,
  };
};
