import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    multiply: (state, action) => {
      state.value = state.value * action.payload;
    },
    divide: (state, action) => {
      state.value = state.value / action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, multiply, divide } = counterSlice.actions;

export default counterSlice.reducer;
