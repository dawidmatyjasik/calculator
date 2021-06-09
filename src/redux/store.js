import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./calculator";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
