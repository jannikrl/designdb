import * as actionTypes from "./actionTypes";
import * as imageService from "../../services/imageService";
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

export const updateDesigner = (values) => {
    return async (dispatch) => {
      dispatch(updateDesignerStart());
      try {
        if (values.imageFile) {
          const image = await imageService.uploadImage(values.imageFile);
          values.image = image;
        }
        const designer = await designerService.updateDesigner(values);
        dispatch(updateDesignerSuccess(designer));
      } catch (error) {
        dispatch(updateDesignerFailure(error.message));
      }
    };
  };
  
  export const createDesigner = (values) => {
    return async (dispatch) => {
      dispatch(updateDesignerStart());
      try {
        if (values.imageFile) {
          const image = await imageService.uploadImage(values.imageFile);
          values.image = image;
        }
        const designer = await designerService.createDesigner(values);
        dispatch(updateDesignerSuccess(designer));
      } catch (error) {
        dispatch(updateDesignerFailure(error.message));
      }
    };
  };
  
  const updateDesignerStart = () => {
    return {
      type: actionTypes.UPDATE_DESIGNER_START,
    };
  };
  
  const updateDesignerSuccess = (designer) => {
    return {
      type: actionTypes.UPDATE_DESIGNER_SUCCESS,
      designer: designer,
    };
  };
  
  const updateDesignerFailure = (error) => {
    return {
      type: actionTypes.UPDATE_DESIGNER_FAILURE,
      error: error,
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
