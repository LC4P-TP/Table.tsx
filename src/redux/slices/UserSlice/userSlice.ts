import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Access, getUserData, UserApiResponse } from "../../../services/mockAPI/loginUserAPI";
import { error } from "../GeneralSliceTypes/generalSliceTypes";
import { SessionStorageService, TOKEN_KEY, USER_KEY } from "../../../services/SessionStorageService";

export interface UserState {
  success: boolean;
  error: error | null;
  userId: string;
  loading: boolean;
  access: Access;
}

const initialUserState: UserState = {
  success: false,
  error: null,
  userId: "",
  loading: false,
  access: {
    supervisor: false,
    id: 0,
    name: "",
    testPage: false,
    testPageMenu: false,
    testPageSubMenu: false,
  },
};

const userState: UserState = SessionStorageService.get(USER_KEY) || initialUserState;

export const loginUser = createAsyncThunk("login", async () => getUserData());

const generateState = (userApiResponse: UserApiResponse): UserState => ({
  success: userApiResponse.isSuccess,
  userId: userApiResponse.response.id,
  loading: false,
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
