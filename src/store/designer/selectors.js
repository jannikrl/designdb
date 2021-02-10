export const getDesigner = (store) => {
  return store.designer.designer;
};

export const isLoading = (state) => {
  return state.designer.loading;
};

export const getError = (state) => {
  return state.designer.error;
};
