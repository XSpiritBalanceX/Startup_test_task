import {
  isLoginSelect,
  userInfoSelect,
  isLoadingSelect,
  errorSelect,
} from "./selectors";
import { UserState, UserInfo } from "./userSlice";
import { RootState } from ".";

const mockState: RootState = {
  user: {
    isLogin: true,
    userInfo: {
      first_name: "first_name",
      last_name: "last_name",
      email: "email",
      is_verify_email: false,
      date_of_birthday: "2000-01-01",
      country: "country",
      photo: "photo",
    } as UserInfo,
    isLoading: false,
    error: null,
  } as UserState,
};

describe("Selectors tests:", () => {
  it("should return login as true", () => {
    const result = isLoginSelect(mockState);
    expect(result).toBe(true);
  });

  it("should return lenght of userInfo equal 7", () => {
    const result = userInfoSelect(mockState);
    expect(Object.keys(result!).length).toBe(7);
  });

  it("should return loading as false", () => {
    const result = isLoadingSelect(mockState);
    expect(result).toBe(false);
  });

  it("should return error as null", () => {
    const result = errorSelect(mockState);
    expect(result).toBe(null);
  });
});
