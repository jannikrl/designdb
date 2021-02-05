import {
  FETCH_DESIGNER_FAILURE,
  FETCH_DESIGNER_START,
  FETCH_DESIGNER_SUCCESS,
} from "./actionTypes";

const initialState = {
  designer: null,
  loading: false,
  error: null,
};

const fetchDesignerStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchDesignerSuccess = (state, action) => {
  return {
    ...state,
    designer: action.designer,
    loading: false,
  };
};

const fetchDesignerFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESIGNER_START:
      return fetchDesignerStart(state, action);
    case FETCH_DESIGNER_SUCCESS:
      return fetchDesignerSuccess(state, action);
    case FETCH_DESIGNER_FAILURE:
      return fetchDesignerFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
