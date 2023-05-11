import TodoList from "./TodoList";
import { render, screen } from "@testing-library/react";

describe("Given a TodoList component", () => {
  describe("When it receives the todos prop with todos array", () => {
    test("Then it should show a 'Valorant' and 'Read a book' todos", () => {
      const todos = [
        {
          name: "Valorant",
          id: "1",
          isDone: false,
        },

        {
          name: "Read a book",
          id: "2",
          isDone: true,
        },
      ];

      render(<TodoList todos={todos} />);

      const todosValorant = screen.getByRole("heading", {
        name: todos[0].name,
      });
      expect(todosValorant).toBeInTheDocument();

      const todosReadABook = screen.getByRole("heading", {
        name: todos[1].name,
      });
      expect(todosReadABook).toBeInTheDocument();
    });
  });
});
