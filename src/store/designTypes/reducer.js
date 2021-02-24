import * as actionTypes from "./actionTypes";

const initialState = {
  types: [],
  loading: false,
  error: null,
};

const fetchDesignTypesStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchDesignTypesSuccess = (state, action) => {
  return {
    ...state,
    types: action.types,
    loading: false,
  };
};

const fetchDesignTypesFailure = (state, action) => {
  return {
    ...state,
    types: action.types,
    error: action.error,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGN_TYPES_START:
      return fetchDesignTypesStart(state, action);
    case actionTypes.FETCH_DESIGN_TYPES_SUCCESS:
      return fetchDesignTypesSuccess(state, action);
    case actionTypes.FETCH_DESIGN_TYPES_FAILURE:
      return fetchDesignTypesFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
