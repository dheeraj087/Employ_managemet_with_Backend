import { configureStore } from "@reduxjs/toolkit";
// import { counterReduser } from "./feature/counterReduser.js";
export const store = configureStore({
  reducer: {
    // counter: counterReduser,
  },
});
