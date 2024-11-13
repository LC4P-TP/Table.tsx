import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData, TestData } from "../../mockAPI/api";

interface TestState {
  data: TestData[];
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, actions) => {
      state.data = actions.payload;
    }).addCase(fetchData.rejected, (state, actions)=> {
      console.debug(actions.error.message);
    });
  },
});

export default testSlice.reducer;
