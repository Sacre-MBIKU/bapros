import styled, { css } from "styled-components";

const CrossIconDecoration = styled.li`
  width: auto;
  height: auto;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  transition: all 1s ease;

  img {
    width: 1.3rem;
    height: auto;
  }

  @media (max-width: 828px) {
    display: ${({ genreListMenuState }) =>
      genreListMenuState === true ? "flex" : "none"};
    transition: all 1s ease;

    ${({ genreListMenuState }) =>
      genreListMenuState === true
        ? css `
        position : absolute;
        top: -1.5%;
        right: 0;
      `
        : ""}
  }

  @media (max-width: 768px) {
    display: ${({ genreListMenuState }) =>
      genreListMenuState === true ? "flex" : "none"};
    transition: all 1s ease;

    ${({ genreListMenuState }) =>
      genreListMenuState === true
        ? css `
        position : absolute;
        top: -1.5%;
        right: 0;
      `
        : ""}
  }
`;

export default CrossIconDecoration;
