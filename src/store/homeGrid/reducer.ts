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
    case types.HOME_GRID_FETCH_DESIGNS_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.HOME_GRID_FETCH_DESIGNS_SUCCESS:
      return {
        ...state,
        designs: action.designs,
        loading: false,
      };
    case types.HOME_GRID_FETCH_DESIGNS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case types.HOME_GRID_SHOW_FEATURED:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          showFeatured: action.value,
        },
      };
    case types.HOME_GRID_SELECT_DESIGNER:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          designer: action.id,
        },
      };
    case types.HOME_GRID_SELECT_MANUFACTURER:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          manufacturer: action.id,
        },
      };
    case types.HOME_GRID_SELECT_DESIGN_TYPE:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          type: action.id,
        },
      };
    default:
      return state;
  }
};

export default reducer;
