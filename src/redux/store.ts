import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/TestPageSlice/testPageSlice";
import userReducer from "./slices/UserSlice/userSlice";
import InboundSuppliesReducer from "./slices/InboundSuppliesSlice";

export const store = configureStore({ reducer: { testReducer, userReducer, InboundSuppliesReducer } });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
