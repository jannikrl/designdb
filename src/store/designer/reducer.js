import * as actionTypes from "./actionTypes";

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

const updateDesignerStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const updateDesignerSuccess = (state, action) => {
  return {
    ...state,
    designer: action.designer,
    loading: false,
  };
};

const updateDesignerFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGNER_START:
      return fetchDesignerStart(state, action);
    case actionTypes.FETCH_DESIGNER_SUCCESS:
      return fetchDesignerSuccess(state, action);
    case actionTypes.FETCH_DESIGNER_FAILURE:
      return fetchDesignerFailure(state, action);
    case actionTypes.UPDATE_DESIGNER_START:
      return updateDesignerStart(state, action);
    case actionTypes.UPDATE_DESIGNER_SUCCESS:
      return updateDesignerSuccess(state, action);
    case actionTypes.UPDATE_DESIGNER_FAILURE:
      return updateDesignerFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
