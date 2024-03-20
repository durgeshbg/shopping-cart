import styled from 'styled-components';

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .total {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
  @media (max-width: 580px) {
    .total {
      justify-content: center;
    }
  }
  @media (max-width: 420px) {
    .total {
      justify-content: center;
      font-size: 0.8rem;
    }
  }
`;
