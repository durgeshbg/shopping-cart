import styled from 'styled-components';

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80dvh;

  p {
    width: 50%;
    line-height: 30px;
    word-spacing: 5px;
  }

  a {
    background-color: #525252;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #d8d6d6;
    color: #525252;
  }
`;
