import { configureStore } from "@reduxjs/toolkit";
import autobulanceReducer from "./features/autobulance/slice";
export const store = configureStore({
  reducer: { autobulance: autobulanceReducer },
  devtools: true,
});
export default store;
