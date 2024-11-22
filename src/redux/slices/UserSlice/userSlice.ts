import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Access, getUserData, UserApiResponse } from "../../mockAPI/loginUserAPI";
import { error } from "../GeneralSliceTypes/generalSliceTypes";
import { SessionStorageService, TOKEN_KEY, USER_KEY } from "../../mockAPI/SessionStorageService";

export interface UserState {
  success: boolean;
  error: error | null;
  userId: string;
  isActivated: boolean;
  loading: boolean;
  department: string | null;
  departmentId: number | null;
  access: Access;
}

const initialUserState: UserState = {
  success: false,
  error: null,
  userId: "",
  isActivated: false,
  loading: false,
  department: null,
  departmentId: null,
  access: {
    isHeadOfDepartment: false,
    isSupervisor: false,
    id: 0,
    name: "",
    material: 0,
    specification: 0,
    materialSettings: 0,
    setupOrder: 0,
    order: 0,
    orderSettings: 0,
    income: 0,
    consumption: 0,
    stock: 0,
    logisticSettings: 0,
    measurements: 0,
    isManager: 0,
  },
};

const userState: UserState = SessionStorageService.get(USER_KEY) || initialUserState;

export const loginUser = createAsyncThunk("login", async () => getUserData());

const generateState = (userApiResponse: UserApiResponse): UserState => ({
  success: userApiResponse.isSuccess,
  userId: userApiResponse.response.id,
  isActivated: userApiResponse.response.isActivated,
  loading: false,
  department: userApiResponse.response.department,
  departmentId: userApiResponse.response.departmentId,
  access: userApiResponse.response.access,
  error: !userApiResponse.isSuccess
    ? {
      status: userApiResponse.statusCode,
      message: userApiResponse.error || "Unknown error",
    }
    : null,
});

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    testLogin: (state: UserState) => ({ ...state, loading: true }),
    logout: () => {
      SessionStorageService.remove(USER_KEY);
      return initialUserState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state: UserState) => ({ ...state, loading: true }))
      .addCase(loginUser.fulfilled, (state: UserState, action: PayloadAction<UserApiResponse>) => {
        const newState = generateState(action.payload);

        SessionStorageService.set(TOKEN_KEY, action.payload.response.token);
        SessionStorageService.set(USER_KEY, newState);

        return { ...state, ...newState };
      })
      .addCase(loginUser.rejected, (state: UserState) => ({ ...state, loading: false }));
  },
});

export const { testLogin, logout } = userSlice.actions;
export default userSlice.reducer;
