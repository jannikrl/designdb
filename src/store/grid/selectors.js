export const getShowFeatured = (state) => {
    return state.grid.showFeatured;
}

export const getFilterOptions = (state) => {
    return {
        showFeatured: state.grid.showFeatured,
    }
}