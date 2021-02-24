import * as actionTypes from "./actionTypes";

const initialState = {
  designs: [],
  loading: false,
  error: null,
  filterOptions: {
    showFeatured: true,
    designer: null,
    manufacturer: null,
    type: null,
  },
};

const fetchDesignsStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchDesignsSuccess = (state, action) => {
  return {
    ...state,
    designs: action.designs,
    loading: false,
  };
};

const fetchDesignsFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const showFeatured = (state, action) => {
  return {
    ...state,
    filterOptions: {
      ...state.filterOptions,
      showFeatured: action.value,
    },
  };
};

const selectDesigner = (state, action) => {
  return {
    ...state,
    filterOptions: {
      ...state.filterOptions,
      designer: action.id,
    },
  };
};

const selectManufacturer = (state, action) => {
  return {
    ...state,
    filterOptions: {
      ...state.filterOptions,
      manufacturer: action.id,
    },
  };
};

const selectDesignType = (state, action) => {
  return {
    ...state,
    filterOptions: {
      ...state.filterOptions,
      type: action.id,
    },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGNS_START:
      return fetchDesignsStart(state, action);
    case actionTypes.FETCH_DESIGNS_SUCCESS:
      return fetchDesignsSuccess(state, action);
    case actionTypes.FETCH_DESIGNS_FAILURE:
      return fetchDesignsFailure(state, action);
    case actionTypes.SHOW_FEATURED:
      return showFeatured(state, action);
    case actionTypes.SELECT_DESIGNER:
      return selectDesigner(state, action);
    case actionTypes.SELECT_MANUFACTURER:
      return selectManufacturer(state, action);
    case actionTypes.SELECT_DESIGN_TYPE:
      return selectDesignType(state, action);
    default:
      return state;
  }
};

export default reducer;
