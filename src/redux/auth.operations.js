import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://auth-qa.qencode.com",
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const setSecret = (secret) => {
  instance.defaults.headers.common.Authorization = `${secret}`;
};

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/v1/auth/login", formData);
      setToken(data.token);
      setSecret(data.secret);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const response = await instance.post(`/v1/auth/password-reset`, {
        email: email,
      });
      console.log(response);
      if (response) {
        console.log("Check your mail!");
      }
      return response;
    } catch (err) {
      console.log("We don't have your email on our data base!");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post(
        "/v1/auth/password-set",
        token,
        secret,
        formData
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
