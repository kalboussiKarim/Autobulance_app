import { configureStore } from "@reduxjs/toolkit";
import autobulanceReducer from "./features/autobulance/slice";
import breakdownReducer from "./features/autobulance/slices/breakdownsSlice";
import authReducer from "../src/features/authentication/slice";
export const store = configureStore({
  reducer: {
    autobulance: autobulanceReducer,
    breakdowns: breakdownReducer,
    auth: authReducer,
  },
  devtools: true,
});
export default store;
