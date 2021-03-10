import reducer from "./reducer";
import * as types from "./types";

const initialState = {
  token: null,
  loading: false,
  error: false,
};

describe("Auth reducer", () => {
  it("should return inital state", () => {
    expect(reducer(undefined, { type: types.AUTH_INIT })).toEqual(initialState);
  });

  it("should store the token upon login", () => {
    expect(
      reducer(initialState, {
        type: types.LOGIN_SUCCESS,
        token: "an-auth-token",
      })
    ).toEqual({
      token: "an-auth-token",
      loading: false,
      error: false,
    });
  });

  it("should remove the token upon logout", () => {
    expect(
      reducer(
        {
          token: "an-auth-token",
          loading: false,
          error: false,
        },
        {
          type: types.LOGOUT,
        }
      )
    ).toEqual({
      token: null,
      loading: false,
      error: false,
    });
  });
});
