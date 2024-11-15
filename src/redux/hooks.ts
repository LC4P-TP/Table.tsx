import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// using useDispatch and useSelector with types of store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
