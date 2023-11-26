import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BreakdownServices from "../services/BreakdownServices";
export const getBreakdowns = createAsyncThunk(
  "breakdown/get",
  async (thunkAPI) => {
    try {
      const result = await BreakdownServices.getAllBreakDown();
      return result.data.data.breakdowns;
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
export const postRequestBreakdown = createAsyncThunk(
  "breakdown/post",
  async (data, thunkAPI) => {
    console.log("post breakdown ");
    try {
      const result = await BreakdownServices.postRequestBreakdown(data);
      return result;
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
export const breakDownsSlice = createSlice({
  name: "breakDowns",
  initialState: {
    breakdowns: [],
    loading: false,
  },
  success: false,
  extraReducers: {
    [getBreakdowns.pending]: (state, action) => {
      state.loading = true;
    },
    [getBreakdowns.fulfilled]: (state, action) => {
      (state.loading = false), (state.breakdowns = action.payload);
      state.success = true;
    },
    [getBreakdowns.rejected]: (state, action) => {
      state.success = false;
    },
    [postRequestBreakdown.pending]: (state, action) => {
      state.loading = true;
    },
    [postRequestBreakdown.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [postRequestBreakdown.rejected]: (state, action) => {
      state.success = false;
    },
  },
});
export const { reducer, actions } = breakDownsSlice;
export default reducer;
