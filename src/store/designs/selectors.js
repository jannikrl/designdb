export const getDesigns = (state) => {
    return state.designs.designs
}

export const getFilterOptions = (state) => {
    return state.designs.filterOptions
}

export const getShowFeatured = (state) => {
    return state.designs.filterOptions.showFeatured;
}

export const getSelectedDesigner = (state) => {
    return state.designs.filterOptions.designer
}

export const getSelectedManufacturer = (state) => {
    return state.designs.filterOptions.manufacturer
}