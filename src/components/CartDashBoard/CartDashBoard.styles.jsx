import styled from 'styled-components';

export const StyledCartDashBoard = styled.div`
  .error {
    color: red;
    font-size: 0.7rem;
  }

  .cart {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
  }

  .quantity {
    display: flex;
    gap: 5px;
  }

  button {
    font-family: inherit;
  }

  .quantity button {
    background-color: #6666ff;
    border: none;
    border-radius: 5px;
  }

  input {
    width: 40px;
    border-radius: 5px;
    border: 0.1px solid black;
    padding: 0px 5px;
    font-family: inherit;
  }
  input:focus {
    outline: none;
  }

  .cart > button {
    background-color: #6666ff;
    border: none;
    border-radius: 5px;
    padding: 5px;
  }

  @media (max-width: 815px) {
    input {
      font-size: 0.7rem;
      padding: 0px 4px;
      width: 20px;
    }
    button {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 580px) {
    input {
      font-size: 0.4rem;
      padding: 0px 4px;
      width: 20px;
    }
    button {
      font-size: 0.5rem;
    }
  }
`;
