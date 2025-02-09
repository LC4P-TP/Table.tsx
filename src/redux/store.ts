import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice/userSlice";
import testReducer from "./slices/testPageSlice";
import TestPageMenuReducer from "./slices/TestPageMenuSlice";
import TestPageSubMenuReducer from "./slices/TestPageSubMenuSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
    testPageMenu: TestPageMenuReducer,
    testPageSubMenu: TestPageSubMenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
