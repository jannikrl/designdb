export const getShowFeatured = (state) => {
    return state.grid.showFeatured;
}

export const getDesigns = (state) => {
    const showFeatured = state.grid.showFeatured;
    const designList = state.designs.designs;

    return designList.filter((design) => (showFeatured) ? design.featured === showFeatured : true);
}