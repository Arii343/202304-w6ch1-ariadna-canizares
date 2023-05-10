import { useState } from "react";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  onClick: (todoInput: string) => void;
}

const Header = ({ onClick }: HeaderProps): JSX.Element => {
  const [todoInput, setTodoInput] = useState("");

  const handleTodoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setTodoInput(inputValue);
  };

  const handleAddButtonClick = () => {
    onClick(todoInput);
  };

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">todo list</h1>
      <div className="header__main">
        <input
          className="header__input"
          data-testid="header-input"
          type="text"
          value={todoInput}
          onChange={handleTodoInputChange}
        />
        <button
          className="header__add-button"
          data-testid="header-add-button"
          onClick={handleAddButtonClick}
        >
          add
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
