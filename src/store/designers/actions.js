import * as actionTypes from "./actionTypes";
import * as designerService from "../../services/designerService";

// TODO Add try catch
export const fetchDesigners = () => {
  return async (dispatch) => {
    const designers = await designerService.fetchDesigners();
    dispatch(fetchDesignersSuccess(designers));
  };
};

export const fetchDesignersSuccess = (designers) => {
  return {
    type: actionTypes.FETCH_DESIGNERS_SUCCESS,
    designers: designers,
  };
};
