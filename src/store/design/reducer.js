import * as actionTypes from "./actionTypes";

const initialState = {
  design: null,
};

const fetchDesignSuccess = (state, action) => {
  return {
    ...state,
    design: action.design,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGN_SUCCESS:
      return fetchDesignSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
