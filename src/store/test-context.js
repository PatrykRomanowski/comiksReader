import { createSlice } from "@reduxjs/toolkit";

const testContext = createSlice({
  name: "testRedux",
  initialState: { testNumber1: 0, testNumber2: 0 },
  reducers: {
    addTestNumber1(state, action) {
      state.testNumber1 = state.testNumber1 + action.payload.value;
    },
    addTestNumber2(state, action) {
      state.testNumber2 = state.testNumber2 + action.payload.value;
    },
  },
});

export const testActions = testContext.actions;

export default testContext;
