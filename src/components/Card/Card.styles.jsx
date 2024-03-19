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
`;
