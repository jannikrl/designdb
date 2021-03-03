import * as types from "./types";

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

const createDesignerStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const createDesignerSuccess = (state, action) => {
  return {
    ...state,
    designer: action.designer,
    loading: false,
  };
};

const createDesignerFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DESIGNER_START:
      return fetchDesignerStart(state, action);
    case types.FETCH_DESIGNER_SUCCESS:
      return fetchDesignerSuccess(state, action);
    case types.FETCH_DESIGNER_FAILURE:
      return fetchDesignerFailure(state, action);
    case types.UPDATE_DESIGNER_START:
      return updateDesignerStart(state, action);
    case types.UPDATE_DESIGNER_SUCCESS:
      return updateDesignerSuccess(state, action);
    case types.UPDATE_DESIGNER_FAILURE:
      return updateDesignerFailure(state, action);
    case types.CREATE_DESIGNER_START:
      return createDesignerStart(state, action);
    case types.CREATE_DESIGNER_SUCCESS:
      return createDesignerSuccess(state, action);
    case types.CREATE_DESIGNER_FAILURE:
      return createDesignerFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
