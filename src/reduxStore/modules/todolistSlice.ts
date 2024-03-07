import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../api";

const initialState: Todo[] = [];

const todolistSlice = createSlice({
  name: "todolistSlice",
  initialState,
  reducers: {
    getTodolist: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
  },
});

export const { getTodolist } = todolistSlice.actions;

export default todolistSlice.reducer;
