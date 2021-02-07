import * as actionTypes from "./actionTypes";

const initialState = {
  designers: [],
  loading: false,
  error: null,
};

const fetchDesignersStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchDesignersSuccess = (state, action) => {
  return {
    ...state,
    designers: action.designers,
    loading: false,
  };
};

const fetchDesignersFailure = (state, action) => {
  return {
    ...state,
    designers: action.designers,
    error: action.error,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGNERS_START:
      return fetchDesignersStart(state, action);
    case actionTypes.FETCH_DESIGNERS_SUCCESS:
      return fetchDesignersSuccess(state, action);
    case actionTypes.FETCH_DESIGNERS_FAILURE:
      return fetchDesignersFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
