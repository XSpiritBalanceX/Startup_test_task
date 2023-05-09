import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserInfo = {
  first_name: string;
  last_name: string;
  email: string;
  is_verify_email: boolean;
  date_of_birthday: null | string;
  country: null | string;
  photo: null | string;
};

type UserState = {
  isLogin: boolean;
  userInfo: UserInfo | object;
};

type UserLogin = {
  login: boolean;
  token: string;
};

let tokenInStorage: string | null = sessionStorage.getItem("token");

const initialState: UserState = {
  isLogin: tokenInStorage !== null ? true : false,
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<UserLogin>) {
      state.isLogin = action.payload.login;
      sessionStorage.setItem("token", action.payload.token);
    },
    addUserInfo(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
    },
  },
});

export const { loginUser, addUserInfo } = userSlice.actions;

export default userSlice.reducer;
