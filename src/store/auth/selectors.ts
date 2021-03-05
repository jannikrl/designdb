import { RootState } from "../types"

export const isAuthenticated = (state: RootState) => {
    return state.auth.token !== null
}