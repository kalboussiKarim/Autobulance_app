import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "./services/auth.service";
import * as SecureStore from "expo-secure-store";

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const result = await AuthServices.login(data);
    console.log(result.data);
    return result.data.data;
  } catch (error) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(errorMessage);
    return thunkAPI.rejectWithValue();
  }
});

export const regsiter = createAsyncThunk("auth/register", async (data) => {
  const result = AuthServices.register(data);
  return result.data;
});
export const logout = createAsyncThunk("auth/logout", async () => {
  const result = AuthServices.logout();
  return result;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    logedIn: false,
    registred: false,
    logedOut: false,
    loading: false,
    client: {},
    isfirstTime: true,
    clientToken: null,
  },
  success: false,
  reducers: {
    setIsFirstTimeFalse: (state) => {
      state.isfirstTime = false;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.logedIn = true;
      state.client = action.payload.client;
      state.clientToken = action.payload.token;
      SecureStore.setItemAsync("token", action.payload.token);
    },
    [login.rejected]: (state, action) => {
      (state.loading = false), (state.success = false), (state.logedIn = false);
    },
    [regsiter.pending]: (state, action) => {
      state.loading = true;
    },
    [regsiter.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.registred = true;
      state.client = action.payload.data;
      state.clientToken = action.payload.data.token;
    },
    [regsiter.rejected]: (state, action) => {
      (state.loading = false),
        (state.success = false),
        (state.registred = false);
    },
    [logout.pending]: (state, action) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.logedOut = true;
      state.client = {};
      state.clientToken = null;
    },
    [logout.rejected]: (state, action) => {
      (state.loading = false),
        (state.success = false),
        (state.logedOut = false);
    },
  },
});
export const { reducer, actions } = authSlice;
export const { setIsFirstTimeFalse } = actions;
export default reducer;
