import { RootState } from "./index";

const allState = (state: RootState) => state.user;

export const isLoginSelect = (state: RootState) => allState(state).isLogin;

export const userInfoSelect = (state: RootState) => allState(state).userInfo;

export const isLoadingSelect = (state: RootState) => allState(state).isLoading;

export const errorSelect = (state: RootState) => allState(state).error;
