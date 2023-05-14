import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIRouters } from "../utility/axiosWrapper";

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
  userInfo: UserInfo | null;
  isLoading: boolean;
  error: null | any;
};

type TokenUser = {
  access_token: string;
  refresh_token: string;
};

const initialState: UserState = {
  isLogin: true,
  userInfo: null,
  isLoading: false,
  error: null,
};

export const userRefreshToken = createAsyncThunk(
  "user/refreshToken",
  async (cbFunc: Function | undefined, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: APIRouters.refreshtoken,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        data: {
          refreshToken: localStorage.getItem("refresh_token"),
        },
      });
      if (cbFunc && response.status === 200) {
        thunkAPI.dispatch(cbFunc());
      }
      return response.data;
    } catch (err: any) {
      thunkAPI.dispatch(loginUser(false));
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (_, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: APIRouters.userinfo,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      return response.data;
    } catch (err: any) {
      if (err.response.status === 401) {
        thunkAPI.dispatch(userRefreshToken(() => getUserInfo()));
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(
      getUserInfo.fulfilled,
      (state, action: PayloadAction<UserInfo>) => {
        state.isLogin = true;
        state.error = null;
        state.isLoading = false;
        state.userInfo = action.payload;
      }
    );
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.isLogin = true;
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(userRefreshToken.pending, (state) => {
      state.isLogin = true;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(
      userRefreshToken.fulfilled,
      (state, action: PayloadAction<TokenUser>) => {
        state.isLogin = true;
        state.error = null;
        state.isLoading = true;
        localStorage.setItem("access_token", action.payload.access_token);
        localStorage.setItem("refresh_token", action.payload.refresh_token);
      }
    );
    builder.addCase(userRefreshToken.rejected, (state, action) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
