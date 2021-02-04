import * as designService from "../../services/designService";
import * as actionTypes from "./actionTypes";

export const fetchDesign = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchDesignStart());
    try {
      const nextDesign = await designService.fetchDesign(id);
      dispatch(fetchDesignSuccess(nextDesign));
    } catch (error) {
      dispatch(fetchDesignFailure(error));
    }
  };
};

export const fetchDesignStart = () => {
  return {
    type: actionTypes.FETCH_DESIGN_START,
  };
};

export const fetchDesignSuccess = (design) => {
  return {
    type: actionTypes.FETCH_DESIGN_SUCCESS,
    design: design,
  };
};

export const fetchDesignFailure = (error) => {
  return {
    type: actionTypes.FETCH_DESIGN_FAILURE,
    error: error,
  };
};