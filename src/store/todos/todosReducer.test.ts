import {
  todoMock,
  todosMock,
  todosDeletedMock,
  deleteTodoId,
  todoUpdatedMock,
  updateTodoMock,
} from "../../mocks/todos/todoMock";
import {
  addTodosAction,
  loadTodosAction,
  todosReducer,
  deleteTodoAction,
  updateTodoAction,
} from "./todosSlice";
import { TodosState } from "./types";

describe("Given a todoReducer", () => {
  describe("When it receives the addTodo action with a new todo", () => {
    test("Then it should return a new state with a new todo", () => {
      const expectedState: TodosState = {
        todos: [...todosMock, todoMock],
      };

      const state: TodosState = {
        todos: [...todosMock],
      };

      const newState: TodosState = todosReducer(
        state,
        addTodosAction(todoMock)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
  describe("When it receives the loadTodos action with the new todos array", () => {
    test("Then it should return a new state with the new todos", () => {
      const expectedState: TodosState = {
        todos: [...todosMock],
      };

      const state: TodosState = {
        todos: [],
      };

      const newState: TodosState = todosReducer(
        state,
        loadTodosAction(todosMock)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
  describe("When it receives the deleteTodo action with a todo id", () => {
    test("Then it should return a new state without one todo", () => {
      const expectedState: TodosState = {
        todos: [...todosDeletedMock],
      };

      const state: TodosState = {
        todos: [...todosMock],
      };

      const newState: TodosState = todosReducer(
        state,
        deleteTodoAction(deleteTodoId)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
  describe("When it receives the updateTodo action with the updated todo", () => {
    test("Then it should return a new state with the updated todo", () => {
      const expectedState: TodosState = {
        todos: [...todoUpdatedMock],
      };

      const state: TodosState = {
        todos: [...todosMock],
      };

      const newState: TodosState = todosReducer(
        state,
        updateTodoAction(updateTodoMock)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
