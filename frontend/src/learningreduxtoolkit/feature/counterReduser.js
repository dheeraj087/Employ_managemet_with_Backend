import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialsState = {
  value: 0,
  name: "hddfh",
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialsState,
  reducers: {
    incriment: (state, action) => {
      state.value += 1;
    },
    dirciment: (state, action) => {
      state.value -= 1;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { incriment, dirciment, changeName } = counterSlice.actions;
export const counterReduser = counterSlice.reducer;
