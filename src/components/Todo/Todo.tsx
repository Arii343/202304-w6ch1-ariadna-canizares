import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import TodoStyled from "./TodoStyled";

interface TodoProps {
  name: string;
}

const Todo = ({ name }: TodoProps): JSX.Element => {
  return (
    <TodoStyled className="todo">
      <h3 className="todo__text">{name}</h3>
      <div className="todo__actions">
        <button className="todo__action-button" data-testid="check-button">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="todo__action-button" data-testid="edit-button">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="todo__action-button" data-testid="delete-button">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </TodoStyled>
  );
};

export default Todo;
