import {
  CREATE_DESIGNER_FAILURE,
  CREATE_DESIGNER_START,
  CREATE_DESIGNER_SUCCESS,
  DesignerActionTypes,
  FETCH_DESIGNER_FAILURE,
  FETCH_DESIGNER_START,
  FETCH_DESIGNER_SUCCESS,
  UPDATE_DESIGNER_FAILURE,
  UPDATE_DESIGNER_START,
  UPDATE_DESIGNER_SUCCESS,
  Designer,
} from "./types";
import * as imageService from "../../services/imageService";
import * as designerService from "../../services/designerService";
import { ThunkAction } from "../types";
import { DesignerFormValues } from "../../components/Forms/DesignerForm/DesignerForm";

export const fetchDesigner = (id: number): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchDesignerStart());
    try {
      const designer = await designerService.fetchDesigner(id);
      dispatch(fetchDesignerSuccess(designer));
    } catch (error) {
      dispatch(fetchDesignerFailure(error.message));
    }
  };
};

// @Todo: Update when DesignerFormValues type has been defined
export const updateDesigner = (values: any): ThunkAction => {
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

export const createDesigner = (values: DesignerFormValues): ThunkAction => {
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

const fetchDesignerStart = (): DesignerActionTypes => {
  return {
    type: FETCH_DESIGNER_START,
  };
};

const fetchDesignerSuccess = (designer: Designer): DesignerActionTypes => {
  return {
    type: FETCH_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const fetchDesignerFailure = (error: string): DesignerActionTypes => {
  return {
    type: FETCH_DESIGNER_FAILURE,
    error: error,
  };
};

const updateDesignerStart = (): DesignerActionTypes => {
  return {
    type: UPDATE_DESIGNER_START,
  };
};

const updateDesignerSuccess = (designer: Designer): DesignerActionTypes => {
  return {
    type: UPDATE_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const updateDesignerFailure = (error: string): DesignerActionTypes => {
  return {
    type: UPDATE_DESIGNER_FAILURE,
    error: error,
  };
};

const createDesignerStart = () => {
  return {
    type: CREATE_DESIGNER_START,
  };
};

const createDesignerSuccess = (designer: Designer): DesignerActionTypes => {
  return {
    type: CREATE_DESIGNER_SUCCESS,
    designer: designer,
  };
};

const createDesignerFailure = (error: string): DesignerActionTypes => {
  return {
    type: CREATE_DESIGNER_FAILURE,
    error: error,
  };
};
