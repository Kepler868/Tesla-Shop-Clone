import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/reducers.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
