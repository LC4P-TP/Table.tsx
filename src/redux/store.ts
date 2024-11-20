import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice/userSlice";
import testReducer from "./slices/TestPageSlice/testPageSlice";
import InboundSuppliesReducer from "./slices/InboundSuppliesSlice";

export const store = configureStore({ reducer: { userReducer, testReducer, InboundSuppliesReducer } });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
