import { TodoStructure } from "../../types";
import { TodosState } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos: (state: TodosState, action: PayloadAction<TodoStructure[]>) => ({
      ...state,
      todos: [...action.payload],
    }),
    addTodo: (state: TodosState, action: PayloadAction<TodoStructure>) => ({
      ...state,
      todos: [...state.todos, action.payload],
    }),
    deleteTodo: (state: TodosState, action: PayloadAction<number>) => ({
      ...state,
      todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
    }),
    updateTodo: (state: TodosState, action: PayloadAction<TodoStructure>) => ({
      ...state,
      todos: [
        ...state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      ],
    }),
  },
});

export const {
  loadTodos: loadTodosAction,
  addTodo: addTodosAction,
  deleteTodo: deleteTodoAction,
  updateTodo: updateTodoAction,
} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
