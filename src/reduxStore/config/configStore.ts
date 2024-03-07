import { configureStore } from "@reduxjs/toolkit";
import todolistSlice from "../modules/todolistSlice";

const store = configureStore({
  reducer: {
    todolistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // **
export type AppDispatch = typeof store.dispatch;

export default store;
