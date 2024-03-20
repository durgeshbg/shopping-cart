import styled from 'styled-components';

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 20px;
  height: 180px;

  .image {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100px;
  }
  span {
    color: gold;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 60%;
    gap: 15px;
  }

  .category {
    background-color: #12b8f9;
    width: max-content;
    padding: 2px 3px;
    border-radius: 5px;
    font-size: 0.8rem;
  }
  .price {
    color: green;
  }
  .subtotal {
    font-size: 12px;
    color: #6666ff;
    min-width: 20ch;
  }

  @media (max-width: 580px) {
    padding: 10px;
    height: 150px;
    gap: 10px;

    .details {
      gap: 10px;
    }

    .title {
      font-size: 0.8rem;
    }
    .price,
    .rating,
    .category {
      font-size: 0.7rem;
    }
    .image {
      width: 100px;
    }
    img {
      width: 60px;
    }
    .subtotal {
      min-width: 10ch;
      font-size: 10px;
    }
  }
  @media (max-width: 430px) {
    padding: 5px;
    height: 140px;
    gap: 5px;

    .details {
      gap: 5px;
    }

    .title {
      font-size: 0.6rem;
    }
    .price,
    .rating,
    .category {
      font-size: 0.5rem;
    }
    .image {
      width: 80px;
    }
    img {
      width: 50px;
    }
    .subtotal {
      font-size: 8px;
    }
  }
`;
