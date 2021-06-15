import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    prevValue: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
      state.value = state.value * 1;
    },
    increment: (state) => {
      if (state.value === 0) return;
      const result = parseFloat(state.value);
      const prevResult = parseFloat(state.prevValue);
      state.prevValue = result + prevResult;
      state.value = 0;
    },
    del: (state) => {
      state.value = Math.floor(state.value / 10);
    },
    dot: (state) => {
      state.value += ".";
    },
    decrement: (state, action) => {
      if (state.value === 0) return;
      const result = parseFloat(state.value);
      const prevResult = parseFloat(state.prevValue);
      state.prevValue = prevResult - result;
      state.value = 0;
    },
    divide: (state, action) => {
      if (state.value === 0 || state.prevValue === 0) return;

      const result = parseFloat(state.value);
      const prevResult = parseFloat(state.prevValue);
      if (prevResult !== 0 || result !== 0) {
        state.prevValue = prevResult / result;
      }
      state.value = 0;
    },
    multiply: (state, action) => {
      if (state.value === 0) return;
      const result = parseFloat(state.value);
      const prevResult = parseFloat(state.prevValue);
      state.prevValue = prevResult * result;
      state.value = 0;
    },
    reset: (state) => {
      state.value = 0;
      state.prevValue = 0;
    },
    total: (state) => {
      if (state.prevValue === 0) return;
      state.value = state.prevValue + state.value;
      state.prevValue = 0;
    },
  },
});

export const {
  add,
  increment,
  decrement,
  divide,
  multiply,
  reset,
  del,
  dot,
  total,
} = counterSlice.actions;

export default counterSlice.reducer;
