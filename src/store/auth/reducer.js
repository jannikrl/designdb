import * as actionTypes from './actionTypes'

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: false,
}

const authInit = (state) => {
    return {
        ...state,
        loading: true,
        error: false,
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        userId: action.userId,
        loading: false,
    }
}

const authFailure = (state) => {
    return {
        ...state,
        loading: false,
        error: true,
    }
}

const logout = (state) => {
    return {
        ...state,
        token: null,
        userId: null,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_INIT: return authInit(state);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILURE: return authFailure(state);
        case actionTypes.AUTH_LOGOUT: return logout(state);
        default: return state;
    }
};

export default reducer;