import * as actionTypes from './actionTypes';

export const showFeatured = (value) => {
    return {
        type: actionTypes.SHOW_FEATURED,
        value: value,
    }
}