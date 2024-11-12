import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testData } from "../testData/testData";
import { getData, TestData } from "../mockAPI/api";

interface TestState {
  data: TestData[]
}

const initialState: TestState = {
  data: [],
};

export const fetchData = createAsyncThunk("testData/fetchData", async () =>
  getData()
);

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    setTestData: (state) => {
      state.data = testData;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, actions) => {
      state.data = actions.payload;
    });
  },
});

export const { setTestData } = testSlice.actions;

export default testSlice.reducer;
