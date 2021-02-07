import * as actionTypes from "./actionTypes";
import * as designerService from "../../services/designerService";

export const fetchDesigners = () => {
  return async (dispatch) => {
    dispatch(fetchDesignersStart());
    try {
      const designers = await designerService.fetchDesigners();
      dispatch(fetchDesignersSuccess(designers));
    } catch {
      dispatch(fetchDesignersFailure());
    }
  };
};

export const fetchDesignersStart = (designers) => {
  return {
    type: actionTypes.FETCH_DESIGNERS_START,
    designers: designers,
  };
};

export const fetchDesignersSuccess = (designers) => {
  return {
    type: actionTypes.FETCH_DESIGNERS_SUCCESS,
    designers: designers,
  };
};

export const fetchDesignersFailure = () => {
  return {
    type: actionTypes.FETCH_DESIGNERS_FAILURE,
  };
};
