import * as types from "./types";
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
    dispatch(createDesignerStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const designer = await designerService.createDesigner(values);
      dispatch(createDesignerSuccess(designer));
    } catch (error) {
      dispatch(createDesignerFailure(error.message));
    }
  };
};

const fetchDesignerStart = () => {
  return {
    type: types.FETCH_DESIGNER_START,
  };
};

const fetchDesignerSuccess = (designer) => {
  return {
    type: types.FETCH_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const fetchDesignerFailure = (error) => {
  return {
    type: types.FETCH_DESIGNER_FAILURE,
    error: error,
  };
};


const updateDesignerStart = () => {
  return {
    type: types.UPDATE_DESIGNER_START,
  };
};

const updateDesignerSuccess = (designer) => {
  return {
    type: types.UPDATE_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const updateDesignerFailure = (error) => {
  return {
    type: types.UPDATE_DESIGNER_FAILURE,
    error: error,
  };
};

const createDesignerStart = () => {
  return {
    type: types.CREATE_DESIGNER_START,
  };
};

const createDesignerSuccess = (designer) => {
  return {
    type: types.CREATE_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const createDesignerFailure = (error) => {
  return {
    type: types.CREATE_DESIGNER_FAILURE,
    error: error,
  };
};