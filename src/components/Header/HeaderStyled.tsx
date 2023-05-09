import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  background-color: cornflowerblue;

  .header__title {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .header__main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .header__input {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    width: 100%;
    max-width: 400px;
  }

  .header__add-button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    width: 65px;
    background-color: white;
  }
`;

export default HeaderStyled;
