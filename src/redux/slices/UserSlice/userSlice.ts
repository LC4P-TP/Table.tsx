import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserData, UserApiResponse } from "../../mockAPI/registerUserAPI";

const initialUserState: UserApiResponse = {
  isSuccess: false,
  response: {
    name: "Name",
    surname: "Surname",
    isActivated: false,
    token: "",

    access: {
      isHeadOfDepartment: false,
      isSupervisor: false,
      id: 0,
      name: null,
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

    id: "",
    notificationToken: "",
    departmentId: 0,
    department: "",
  },

  error: null,
  statusCode: 0,
};

// const userState = SessionStorageService.get(USER_KEY) || initialUserState;

export const registerUser = createAsyncThunk("login", async () =>
  getUserData()
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.isSuccess = actions.payload.isSuccess;
      state.response = actions.payload.response;
      state.error = actions.payload.error
    });
  },
});

export default userSlice.reducer;
