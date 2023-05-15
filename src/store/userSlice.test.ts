import reducer, { loginUser, UserState } from "./userSlice";

jest.mock("axios", () => () => "axios");

describe("UserSlice test:", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      isLogin: true,
      userInfo: null,
      isLoading: false,
      error: null,
    });
  });

  it("should handle login as false", () => {
    const previousState: UserState = {
      isLogin: true,
      userInfo: null,
      isLoading: false,
      error: null,
    };
    expect(reducer(previousState, loginUser(false))).toEqual({
      isLogin: false,
      userInfo: null,
      isLoading: false,
      error: null,
    });
  });
});
