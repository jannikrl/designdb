import * as actionTypes from "./actionTypes";
import * as designerService from "../../services/designerService";

export const fetchDesigners = () => {
  return (dispatch) => {
    const designers = designerService.getDesigners();
    dispatch(fetchDesignersSuccess(designers));
  };
};

export const fetchDesignersSuccess = (designers) => {
  return {
    type: actionTypes.FETCH_DESIGNERS_SUCCESS,
    designers: designers,
  };
};
