import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 350px;
  padding: 1rem;
  margin-bottom: 20px;

  img {
    width: 100px;
  }

  .image {
    width: 10rem;
    height: 10rem;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: flex-start;
    gap: 1rem;
  }
  .title {
    font-weight: 900;
  }
  .category {
    background-color: #12b8f9;
    width: max-content;
    padding: 2px 3px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
  .review {
    display: flex;
    justify-content: space-between;
  }
  .review .price {
    color: green;
  }
  span {
    color: gold;
  }

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
`;
