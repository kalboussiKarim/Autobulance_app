import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RequestServices from "./services/RequestServices";
import { showMessage } from "react-native-flash-message";
export const postRequest = createAsyncThunk(
  "Request/post",
  async (data, thunkAPI) => {
    try {
      const result = await RequestServices.postRequest(data);
      return result.data.data;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("errror " + errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const getAllRequests = createAsyncThunk(
  "Request/get",
  async (thunkAPI) => {
    try {
      const result = await RequestServices.getAllRequests();

      return result.data.data.requests;
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log("errror " + errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const postAutobulance = createAsyncThunk(
  "autobulance/post",
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      console.error("post autobulance from websocket  " + error);
      return thunkAPI.rejectWithValue("web socket error ");
    }
  }
);
export const postRoute = createAsyncThunk(
  "route/post",
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      console.error("post  route error " + error);
      return thunkAPI.rejectWithValue("web socket error ");
    }
  }
);
export const autobulanceSlice = createSlice({
  name: "autobulance",
  initialState: {
    autobulance: {},
    onService: false,
    clientRequeste: [],
    route: [],
    loading: false,
  },
  success: false,
  extraReducers: {
    [postRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [postRequest.fulfilled]: (state, action) => {
      (state.loading = false),
        state.clientRequeste.push(action.payload.request);
      state.success = true;
    },
    [postRequest.rejected]: (state, action) => {
      state.success = false;
    },
    [postAutobulance.pending]: (state, action) => {
      state.loading = true;
    },
    [postAutobulance.fulfilled]: (state, action) => {
      (state.loading = false),
        (state.onService = true),
        (state.autobulance = action.payload);
      state.success = true;
    },
    [postRoute.rejected]: (state, action) => {
      state.success = false;
    },
    [postRoute.pending]: (state, action) => {
      state.loading = true;
    },
    [postRoute.fulfilled]: (state, action) => {
      (state.loading = false), (state.route = action.payload);
      state.success = true;
    },
    [postAutobulance.rejected]: (state, action) => {
      state.success = false;
    },
    [getAllRequests.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllRequests.fulfilled]: (state, action) => {
      (state.loading = false), (state.clientRequeste = action.payload);
      state.success = true;
    },
    [getAllRequests.rejected]: (state, action) => {
      state.success = false;
    },
  },
});
export const { reducer, actions } = autobulanceSlice;
export default reducer;
