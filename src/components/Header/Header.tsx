import { useState } from "react";
import { useAppDispatch } from "../../store";
import { addTodosAction } from "../../store/todos/todosSlice";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const [todoInput, setTodoInput] = useState("");

  const dispatch = useAppDispatch();

  const handleAddButtonClick = () =>
    dispatch(addTodosAction({ id: 7544, isDone: false, name: todoInput }));

  const handleTodoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setTodoInput(inputValue);
  };

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">todo list</h1>
      <div className="header__main">
        <input
          className="header__input"
          type="text"
          value={todoInput}
          onChange={handleTodoInputChange}
        />
        <button className="header__add-button" onClick={handleAddButtonClick}>
          add
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
