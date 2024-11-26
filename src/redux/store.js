import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
const store = configureStore({
  reducer: {
    UserSlice: UserSlice,
  },
});

export default store;
