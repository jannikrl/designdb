import * as actionTypes from "./actionTypes";

const initialState = {
  designers: [],
};

const fetchDesignersSuccess = (state, action) => {
  return {
    ...state,
    designers: action.designers,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGNERS_SUCCESS:
      return fetchDesignersSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
