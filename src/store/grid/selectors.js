export const getShowFeatured = (state) => {
    return state.grid.showFeatured;
}

export const getFilterOptions = (state) => {
    return {
        showFeatured: state.grid.showFeatured,
        selectedDesigner: state.grid.selectedDesigner,
    }
}

export const getSelectedDesigner = (state) => {
    return {
        selectedDesigner: state.grid.designer,
    }
}