import { TodoStructure } from "../../types";
import Todo from "../Todo/Todo";
import TodoListStyled from "./TodoListStyled";

interface TodoListProps {
  todos: TodoStructure[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <TodoListStyled className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} name={todo.name} />
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
