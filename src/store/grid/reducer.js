import * as actionTypes from "./actionTypes";

const initialState = {
  showFeatured: true,
};

const showFeatured = (state, action) => {
  return {
    ...state,
    showFeatured: action.value,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_FEATURED: return showFeatured(state, action);
    default: return state;
  }
};

export default reducer;
