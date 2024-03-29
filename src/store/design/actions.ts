import { ThunkAction } from "../types";
import * as designService from "../../services/designService";
import * as imageService from "../../services/imageService";
import {
  Design,
  FETCH_DESIGN_START,
  FETCH_DESIGN_SUCCESS,
  FETCH_DESIGN_FAILURE,
  UPDATE_DESIGN_START,
  UPDATE_DESIGN_SUCCESS,
  UPDATE_DESIGN_FAILURE,
  CREATE_DESIGN_START,
  CREATE_DESIGN_SUCCESS,
  CREATE_DESIGN_FAILURE,
  RESET,
  DesignActionTypes,
} from "./types";
import { DesignFormValues } from "../../components/Forms/DesignForm/DesignForm";

export const fetchDesign = (id: number): ThunkAction => {
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

export const updateDesign = (values: DesignFormValues): ThunkAction => {
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

export const createDesign = (values: DesignFormValues): ThunkAction => {
  return async (dispatch) => {
    dispatch(createDesignStart());
    try {
      if (values.imageFile) {
        const image = await imageService.uploadImage(values.imageFile);
        values.image = image;
      }
      const design = await designService.createDesign(values);
      dispatch(createDesignSuccess(design));
    } catch (error) {
      dispatch(createDesignFailure(error.message));
    }
  };
};

export const reset = (): DesignActionTypes => {
  return {
    type: RESET,
  };
};

const fetchDesignStart = (): DesignActionTypes => {
  return {
    type: FETCH_DESIGN_START,
  };
};

const fetchDesignSuccess = (design: Design): DesignActionTypes => {
  return {
    type: FETCH_DESIGN_SUCCESS,
    design: design,
  };
};

const fetchDesignFailure = (error: string): DesignActionTypes => {
  return {
    type: FETCH_DESIGN_FAILURE,
    error: error,
  };
};

const updateDesignStart = (): DesignActionTypes => {
  return {
    type: UPDATE_DESIGN_START,
  };
};

const updateDesignSuccess = (design: Design): DesignActionTypes => {
  return {
    type: UPDATE_DESIGN_SUCCESS,
    design: design,
  };
};

const updateDesignFailure = (error: string): DesignActionTypes => {
  return {
    type: UPDATE_DESIGN_FAILURE,
    error: error,
  };
};

const createDesignStart = (): DesignActionTypes => {
  return {
    type: CREATE_DESIGN_START,
  };
};

const createDesignSuccess = (design: Design): DesignActionTypes => {
  return {
    type: CREATE_DESIGN_SUCCESS,
    design: design,
  };
};

const createDesignFailure = (error: string): DesignActionTypes => {
  return {
    type: CREATE_DESIGN_FAILURE,
    error: error,
  };
};
