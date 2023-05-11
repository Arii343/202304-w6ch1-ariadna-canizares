import TodoList from "./TodoList";
import { useAppSelector } from "../../store";

const TodoListContainer = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return <TodoList todos={todos} />;
};

export default TodoListContainer;
