import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice/userSlice";
import testReducer from "./slices/TestPageSlice/testPageSlice";
import InboundSuppliesReducer from "./slices/InboundSuppliesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, // Має бути "user", а не "userReducer"
    test: testReducer,
    inboundSupplies: InboundSuppliesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
