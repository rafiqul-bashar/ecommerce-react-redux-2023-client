import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("auth"))
    ? JSON.parse(sessionStorage.getItem("auth"))
    : {
        accessToken: undefined,
        userData: undefined,
      },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user.accessToken = action.payload.accessToken;
      state.user.userData = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.user.accessToken = undefined;
      state.user.userData = undefined;
      sessionStorage.clear();
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
