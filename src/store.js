import { configureStore } from "@reduxjs/toolkit";
import autobulanceReducer from "./features/autobulance/slice";
import breakdownReducer from "./features/autobulance/slices/breakdownsSlice";
import authReducer from "../src/features/authentication/slice";
import LocationReducer from "./features/autobulance/slices/locationSlice";
export const store = configureStore({
  reducer: {
    autobulance: autobulanceReducer,
    breakdowns: breakdownReducer,
    auth: authReducer,
    location: LocationReducer,
  },
  devtools: true,
});
export default store;
