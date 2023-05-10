import Header from "./Header";
import { useAppDispatch } from "../../store";
import { addTodosAction } from "../../store/todos/todosSlice";
import { v4 as uuidv4 } from "uuid";

const HeaderContainer = () => {
  const dispatch = useAppDispatch();

  const handleAddButtonClick = (todoInput: string) =>
    dispatch(addTodosAction({ id: uuidv4(), isDone: false, name: todoInput }));

  return <Header onClick={handleAddButtonClick} />;
};

export default HeaderContainer;
