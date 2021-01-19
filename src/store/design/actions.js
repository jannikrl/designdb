import * as designService from '../../services/designService';
import * as actionTypes from './actionTypes';

export const fetchDesignSuccess = (design) => {
    return {
        type: actionTypes.FETCH_DESIGN_SUCCESS,
        design: design,
    }
}

export const fetchDesign = (id) => {
    return (dispatch) => {
        const design = designService.getDesign(id);
        dispatch(fetchDesignSuccess(design));
    }
}