export const getManufacturer = (store) => {
    return store.manufacturer.manufacturer
}

export const isLoading = (state) => {
    return state.manufacturer.loading;
  };
  
  export const getError = (state) => {
    return state.manufacturer.error;
  };
  