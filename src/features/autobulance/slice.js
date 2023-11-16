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
export const autobulanceSlice = createSlice({
  name: "autobulance",
  initialState: {
    autobulance: {},
    clientRequeste: [],
    loading: false,
  },
  success: false,
  extraReducers: {
    [postRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [postRequest.fulfilled]: (state, action) => {
      (state.loading = false), state.clientRequeste.push(action.payload.data);
      state.success = true;
    },
    [postRequest.rejected]: (state, action) => {
      state.success = false;
    },
  },
});
export const { reducer, actions } = autobulanceSlice;
export default reducer;
