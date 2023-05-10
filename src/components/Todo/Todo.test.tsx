import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Given a Todo component", () => {
  describe("When it receives a 'Valorant' text", () => {
    test("Then it should show a 'Valorant' text", () => {
      const valorantText = "Valorant";

      render(<Todo name={valorantText} />);

      const todoText = screen.getByRole("heading", { name: valorantText });
      expect(todoText).toBeInTheDocument();
    });
  });
  describe("When it renders", () => {
    test("Then it should show a edit button", () => {
      const valorantText = "Valorant";

      render(<Todo name={valorantText} />);

      const todoEditButton = screen.getByTestId("edit-button");
      expect(todoEditButton).toBeInTheDocument();
    });
  });
  describe("When it renders", () => {
    test("Then it should show a check button", () => {
      const valorantText = "Valorant";

      render(<Todo name={valorantText} />);

      const todoCheckButton = screen.getByTestId("check-button");
      expect(todoCheckButton).toBeInTheDocument();
    });
  });
  describe("When it renders", () => {
    test("Then it should show a delete button", () => {
      const valorantText = "Valorant";

      render(<Todo name={valorantText} />);

      const todoDeleteButton = screen.getByTestId("delete-button");
      expect(todoDeleteButton).toBeInTheDocument();
    });
  });
});
