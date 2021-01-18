import _ from 'underscore';

export const getShowFeatured = (state) => {
    return state.grid.showFeatured;
}

export const getDesigners = (state) => {
    return _.uniq(_.pluck(state.grid.designs, "designer"), designer => designer.id);;
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