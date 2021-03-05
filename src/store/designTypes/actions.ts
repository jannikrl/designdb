import * as designTypeService from "../../services/designTypeService";
import { ThunkAction } from "../types";
import {
    DesignType,
    FETCH_DESIGN_TYPES_FAILURE,
    FETCH_DESIGN_TYPES_START,
    FETCH_DESIGN_TYPES_SUCCESS,
  } from "./types";

export const fetchDesignTypes = (): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchDesignTypesStart());
    try {
      const types = await designTypeService.fetchDesignTypes();
      dispatch(fetchDesignTypesSuccess(types));
    } catch (error) {
      dispatch(fetchDesignTypesFailure(error.message));
    }
  };
};

const fetchDesignTypesStart = () => {
  return {
    type: FETCH_DESIGN_TYPES_START,
  };
};

const fetchDesignTypesSuccess = (types: DesignType[]) => {
  return {
    type: FETCH_DESIGN_TYPES_SUCCESS,
    types: types,
  };
};

const fetchDesignTypesFailure = (error: string) => {
  return {
    type: FETCH_DESIGN_TYPES_FAILURE,
    error: error,
  };
};
