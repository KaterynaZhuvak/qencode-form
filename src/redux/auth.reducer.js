import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk } from "./auth.operations";

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  secret: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addMatcher(isAnyOf(loginThunk.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(loginThunk.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
