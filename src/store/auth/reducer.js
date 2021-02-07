import * as actionTypes from './actionTypes'

const initialState = {
    token: null,
    loading: false,
    error: false,
}

const loginInit = (state) => {
    return {
        ...state,
        loading: true,
        error: false,
    }
}

const loginSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        loading: false,
    }
}

const loginFailure = (state) => {
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
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_INIT: return loginInit(state);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAILURE: return loginFailure(state);
        case actionTypes.LOGOUT: return logout(state);
        default: return state;
    }
};

export default reducer;