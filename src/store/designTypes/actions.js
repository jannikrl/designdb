import * as actionTypes from "./actionTypes";
import * as designTypeService from "../../services/designTypeService";

export const fetchDesignTypes = () => {
  return async (dispatch) => {
    dispatch(fetchDesignTypesStart());
    try {
      const types = await designTypeService.fetchDesignTypes();
      dispatch(fetchDesignTypesSuccess(types));
    } catch {
      dispatch(fetchDesignTypesFailure());
    }
  };
};

const fetchDesignTypesStart = (types) => {
  return {
    type: actionTypes.FETCH_DESIGN_TYPES_START,
    types: types,
  };
};

const fetchDesignTypesSuccess = (types) => {
  return {
    type: actionTypes.FETCH_DESIGN_TYPES_SUCCESS,
    types: types,
  };
};

const fetchDesignTypesFailure = () => {
  return {
    type: actionTypes.FETCH_DESIGN_TYPES_FAILURE,
  };
};
