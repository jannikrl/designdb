export const isAuthenticated = (state) => {
    return state.auth.token !== null
}