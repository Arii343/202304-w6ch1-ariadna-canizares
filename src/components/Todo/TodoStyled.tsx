import styled from "styled-components";

const TodoStyled = styled.section`
  display: flex;
  align-items: start;
  padding: 20px;
  background-color: rgb(229 223 223);
  justify-content: space-between;
  max-width: 700px;
  border-radius: 10px;

  .todo__text {
    margin: 0px;
    font: inherit;
    font-size: 20px;
    align-self: center;
  }

  .todo__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .todo__action-button {
    background-color: white;
    width: 40px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
  }
`;
export default TodoStyled;
