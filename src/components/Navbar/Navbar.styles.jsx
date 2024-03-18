import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: #6666ff double 1px;

  h1 {
    font-size: 2rem;
    letter-spacing: 4px;
    margin: 5px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
    transition: background-color 0.4s ease-in-out;
  }

  .active {
    background-color: #6666ff;
  }
`;
