import * as actionTypes from "./actionTypes";

const initialState = {
  design: null,
  loading: false,
  error: null,
};

const fetchDesignStart = (state, action) => {
  return {
    ...state,
    design: null,
    loading: true,
    error: null,
  };
};

const fetchDesignSuccess = (state, action) => {
  return {
    ...state,
    design: action.design,
    loading: false,
  };
};

const fetchDesignFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const updateDesignStart = (state, action) => {
  return {
    ...state,
    design: null,
    loading: true,
    error: null,
  };
};

const updateDesignSuccess = (state, action) => {
  return {
    ...state,
    design: action.design,
    loading: false,
  };
};

const updateDesignFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGN_START:
      return fetchDesignStart(state, action);
    case actionTypes.FETCH_DESIGN_SUCCESS:
      return fetchDesignSuccess(state, action);
    case actionTypes.FETCH_DESIGN_FAILURE:
      return fetchDesignFailure(state, action);
    case actionTypes.UPDATE_DESIGN_START:
      return updateDesignStart(state, action);
    case actionTypes.UPDATE_DESIGN_SUCCESS:
      return updateDesignSuccess(state, action);
    case actionTypes.UPDATE_DESIGN_FAILURE:
      return updateDesignFailure(state, action);
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
