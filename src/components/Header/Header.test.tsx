import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it receives a 'todo list' text", () => {
    test("Then it shoud show a 'todo list' text", () => {
      const headerTitle = "todo list";
      render(
        <Header
          onClick={() => {
            "void";
          }}
        />
      );

      const headerText = screen.getByRole("heading", { name: headerTitle });
      expect(headerText).toBeInTheDocument();
    });
  });
  describe("When it renders", () => {
    test("Then it shoud show a input", () => {
      render(
        <Header
          onClick={() => {
            "void";
          }}
        />
      );

      const headerInput = screen.getByTestId("header-input");
      expect(headerInput).toBeInTheDocument();
    });
  });
  describe("When it renders", () => {
    test("Then it shoud show an add button", () => {
      render(
        <Header
          onClick={() => {
            "void";
          }}
        />
      );

      const addButton = screen.getByTestId("header-add-button");
      expect(addButton).toBeInTheDocument();
    });
  });
});
