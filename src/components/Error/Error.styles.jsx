import styled from 'styled-components';

export const StyledError = styled.main`
  height: 80dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: red;
    font-size: 3rem;
  }
  .emoji {
    font-weight: bolder;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    color: orange;
  }
`;
