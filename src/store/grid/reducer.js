import * as actionTypes from "./actionTypes";

const initialState = {
  designs: [],
  showFeatured: true,
  selectedDesigner: "",
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    designs: action.designs,
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
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.SHOW_FEATURED:
      return showFeatured(state, action);
    case actionTypes.SELECT_DESIGNER:
      return selectDesigner(state, action);
    default:
      return state;
  }
};

export default reducer;
