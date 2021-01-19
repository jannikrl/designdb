import * as actionTypes from "./actionTypes";

const initialState = {
  designs: [],
  designers: [],
  showFeatured: true,
  selectedDesigner: "",
};

const fetchDesignsSuccess = (state, action) => {
  return {
    ...state,
    designs: action.designs,
  };
};

const fetchDesignersSuccess = (state, action) => {
  return {
    ...state,
    designers: action.designers,
  };
};

const showFeatured = (state, action) => {
  return {
    ...state,
    showFeatured: action.value,
  };
};

const selectDesigner = (state, action) => {
  return {
    ...state,
    selectedDesigner: action.id,
    showFeatured: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESIGNS_SUCCESS:
      return fetchDesignsSuccess(state, action);
    case actionTypes.FETCH_DESIGNERS_SUCCESS:
      return fetchDesignersSuccess(state, action);
    case actionTypes.SHOW_FEATURED:
      return showFeatured(state, action);
    case actionTypes.SELECT_DESIGNER:
      return selectDesigner(state, action);
    default:
      return state;
  }
};

export default reducer;
