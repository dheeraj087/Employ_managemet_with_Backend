import { configureStore } from "@reduxjs/toolkit";
import { employReduser } from "./fetcher/employReduser";

export const store = configureStore({
  reducer: {
    employ: employReduser,
  },
});
