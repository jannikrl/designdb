import * as designService from "../../services/designService";
import * as imageService from "../../services/imageService";
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

export const updateDesign = (values) => {
  return async (dispatch) => {
    dispatch(updateDesignStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const design = await designService.updateDesign(values);
      dispatch(updateDesignSuccess(design));
    } catch (error) {
      dispatch(updateDesignFailure(error.message));
    }
  };
};

export const createDesign = (values) => {
  return async (dispatch) => {
    dispatch(updateDesignStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const design = await designService.createDesign(values);
      dispatch(updateDesignSuccess(design));
    } catch (error) {
      dispatch(updateDesignFailure(error.message));
    }
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};

const fetchDesignStart = () => {
  return {
    type: actionTypes.FETCH_DESIGN_START,
  };
};

const fetchDesignSuccess = (design) => {
  return {
    type: actionTypes.FETCH_DESIGN_SUCCESS,
    design: design,
  };
};

const fetchDesignFailure = (error) => {
  return {
    type: actionTypes.FETCH_DESIGN_FAILURE,
    error: error,
  };
};

const updateDesignStart = () => {
  return {
    type: actionTypes.UPDATE_DESIGN_START,
  };
};

const updateDesignSuccess = (design) => {
  return {
    type: actionTypes.UPDATE_DESIGN_SUCCESS,
    design: design,
  };
};

const updateDesignFailure = (error) => {
  return {
    type: actionTypes.UPDATE_DESIGN_FAILURE,
    error: error,
  };
};
