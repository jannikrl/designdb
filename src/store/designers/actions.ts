import * as designerService from "../../services/designerService";
import { Designer } from "../designer/types";
import { ThunkAction } from "../types";
import {
  DesignersActionTypes,
  FETCH_DESIGNERS_FAILURE,
  FETCH_DESIGNERS_START,
  FETCH_DESIGNERS_SUCCESS,
} from "./types";

export const fetchDesigners = (): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchDesignersStart());
    try {
      const designers = await designerService.fetchDesigners();
      dispatch(fetchDesignersSuccess(designers));
    } catch (error) {
      dispatch(fetchDesignersFailure(error.message));
    }
  };
};

const fetchDesignersStart = (): DesignersActionTypes => {
  return {
    type: FETCH_DESIGNERS_START,
  };
};

const fetchDesignersSuccess = (designers: Designer[]): DesignersActionTypes => {
  return {
    type: FETCH_DESIGNERS_SUCCESS,
    designers: designers,
  };
};

const fetchDesignersFailure = (error: string): DesignersActionTypes => {
  return {
    type: FETCH_DESIGNERS_FAILURE,
    error: error,
  };
};
