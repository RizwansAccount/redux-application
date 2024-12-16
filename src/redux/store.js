import { configureStore } from "@reduxjs/toolkit";
import SnackBarReducer from "./SnackBarReducer";

export const store = configureStore({
  reducer: { SnackBarReducer },
})