import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";
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
    ToastAndroid.show(errorMessage, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    return thunkAPI.rejectWithValue();
  }
});

export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    const result = await AuthServices.register(data);
    console.log(result.data.data);
    return result.data.data;
  } catch (error) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(errorMessage);
    ToastAndroid.show(errorMessage, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    return thunkAPI.rejectWithValue();
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {
  const result = AuthServices.logout();
  return result;
});
export const getProfile = createAsyncThunk("auth/profile", async () => {
  try {
    const result = await AuthServices.getProfile();
    console.log(result.data.data);
    return result.data.data;
  } catch (error) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(errorMessage);
    ToastAndroid.show(errorMessage, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    return thunkAPI.rejectWithValue();
  }
});

export const updateProfile = createAsyncThunk(
  "auth/update-profile",
  async (data) => {
    try {
      const result = await AuthServices.update(data);
      console.log(result.data.data);
      ToastAndroid.show(
        "profile is  updated successfully",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      return result.data.data;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(errorMessage);
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      return thunkAPI.rejectWithValue();
    }
  }
);

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
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.registred = true;
      state.client = action.payload.client;
      state.clientToken = action.payload.token;
      SecureStore.setItemAsync("token", action.payload.token);
    },
    [register.rejected]: (state, action) => {
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
    [getProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.client = action.payload.client;
    },
    [getProfile.rejected]: (state, action) => {
      (state.loading = false), (state.success = false);
    },
    [updateProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.client = action.payload.client;
    },
    [updateProfile.rejected]: (state, action) => {
      (state.loading = false), (state.success = false);
    },
  },
});
export const { reducer, actions } = authSlice;
export const { setIsFirstTimeFalse } = actions;
export default reducer;
