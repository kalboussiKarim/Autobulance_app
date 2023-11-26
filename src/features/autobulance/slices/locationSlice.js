import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postLocation = createAsyncThunk("location/post", async (data) => {
  try {
    return data;
  } catch (error) {
    console.log("errror  while posting location ");
  }
});

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: {},
    loading: false,
  },
  success: false,
  extraReducers: {
    [postLocation.pending]: (state, action) => {
      state.loading = true;
    },
    [postLocation.fulfilled]: (state, action) => {
      (state.loading = false), (state.location = action.payload);
      state.success = true;
    },
    [postLocation.rejected]: (state, action) => {
      state.success = false;
    },
  },
});
export const { reducer, actions } = locationSlice;
export default reducer;
