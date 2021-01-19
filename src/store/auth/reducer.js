import * as actionTypes from './actionTypes'

const initialState = {
    token: null,
    userId: null,
}

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        userId: action.userId,
    }
}

const logout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return logout(state, action);
        default: return state;
    }
};

export default reducer;