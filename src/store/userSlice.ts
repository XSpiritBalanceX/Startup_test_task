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
  token: null | string;
  userInfo: UserInfo | object;
};

const initialState: UserState = {
  isLogin: false,
  token: null,
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    addUserInfo(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
    },
  },
});

export const { loginUser, setToken, addUserInfo } = userSlice.actions;

export default userSlice.reducer;
