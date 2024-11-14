import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Access,
  getUserData,
  UserApiResponse,
} from "../../mockAPI/loginUserAPI";

interface error {
  status: number;
  message: string;
}

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

// const userState = SessionStorageService.get(USER_KEY) || initialUserState;

export const loginUser = createAsyncThunk("login", async () => getUserData());

const generateState = (userApiResponse: UserApiResponse): UserState => {
  return {
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
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserApiResponse>) => {
          const newState = generateState(action.payload);
          Object.assign(state, newState);
        }
      )
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
