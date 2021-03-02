import { rootReducer } from "./reducers";
import { ThunkAction as TA } from "redux-thunk";
import { Action } from "redux";

export type RootState = ReturnType<typeof rootReducer>;
export type ThunkAction = TA<void, RootState, unknown, Action<string>>;
