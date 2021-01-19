import * as actionTypes from './actionTypes';
import * as authService from '../../services/authService';

const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
    }
}

export const auth = () => {
    return (dispatch) => {
        const response = authService.auth();
        const token = response.token;
        const userId = response.userId;
        dispatch(authSuccess(token, userId));
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}