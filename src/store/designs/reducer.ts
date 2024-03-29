import * as types from "./types";

const initialState: types.DesignsState = {
  designs: [],
  loading: false,
  error: "",
  filterOptions: {
    showFeatured: true,
    designer: null,
    manufacturer: null,
    type: null,
  },
};

const reducer = (
  state = initialState,
  action: types.DesignsActionTypes
): types.DesignsState => {
  switch (action.type) {
    case types.FETCH_DESIGNS_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_DESIGNS_SUCCESS:
      return {
        ...state,
        designs: action.designs,
        loading: false,
      };
    case types.FETCH_DESIGNS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.SHOW_FEATURED:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          showFeatured: action.value,
        },
      };
    case types.SELECT_DESIGNER:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          designer: action.id,
        },
      };
    case types.SELECT_MANUFACTURER:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          manufacturer: action.id,
        },
      };
    case types.SELECT_DESIGN_TYPE:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          type: action.id,
        },
      };
    case types.SET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: {
          ...action.filterOptions,
        },
      };
    default:
      return state;
  }
};

export default reducer;
