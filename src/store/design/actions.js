import * as designService from "../../services/designService";
import * as actionTypes from "./actionTypes";

export const fetchDesign = (id) => {
  return async (dispatch) => {
    dispatch(fetchDesignStart());
    try {
      const design = await designService.fetchDesign(id);
      dispatch(fetchDesignSuccess(design));
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

export const updateDesign = (values) => {
    return async (dispatch) => {
      dispatch(updateDesignStart());
      try {
        const design = await designService.updateDesign(values);
        dispatch(updateDesignSuccess(design));
      } catch (error) {
        dispatch(updateDesignFailure(error));
      }
    };
  };

export const updateDesignStart = () => {
    return {
      type: actionTypes.UPDATE_DESIGN_START,
    };
  };
  
  export const updateDesignSuccess = (design) => {
    return {
      type: actionTypes.UPDATE_DESIGN_SUCCESS,
      design: design,
    };
  };
  
  export const updateDesignFailure = (error) => {
    return {
      type: actionTypes.UPDATE_DESIGN_FAILURE,
      error: error,
    };
  };

export const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};
