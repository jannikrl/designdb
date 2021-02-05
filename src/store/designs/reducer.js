import * as actionTypes from "./actionTypes";

const initialState = {
  designs: [],
  filterOptions: {
    showFeatured: true,
    designer: null,
  },
};

const fetchDesignsSuccess = (state, action) => {
  return {
    ...state,
    designs: action.designs,
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
      designer: action.id,
      showFeatured: false,
    },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGNS_SUCCESS:
      return fetchDesignsSuccess(state, action);
    case actionTypes.SHOW_FEATURED:
      return showFeatured(state, action);
    case actionTypes.SELECT_DESIGNER:
      return selectDesigner(state, action);
    default:
      return state;
  }
};

export default reducer;
