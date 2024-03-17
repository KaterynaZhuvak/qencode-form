import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://auth-qa.qencode.com",
});

// const setToken = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/v1/auth/login", formData);
      console.log("data: ", data);
      //   setToken(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  //   extraReducers: (builder) =>
  //     builder
  //       .addCase(loginThunk.fulfilled, (state, { payload }) => {
  //         state.isLoading = false;
  //         state.authenticated = true;
  //         state.token = payload.token;
  //         state.userData = payload.user;
  //       })
  //       .addMatcher(isAnyOf(loginThunk.pending), (state) => {
  //         state.isLoading = true;
  //         state.error = null;
  //       })
  //       .addMatcher(isAnyOf(loginThunk.rejected), (state, { payload }) => {
  //         state.isLoading = false;
  //         state.error = payload;
  //       }),
});

export const authReducer = authSlice.reducer;
