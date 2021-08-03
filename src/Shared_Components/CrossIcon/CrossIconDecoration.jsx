import styled, { css } from "styled-components";

const CrossIconDecoration = styled.li`
  width: auto;
  height: auto;
  display: ${({ modalCross }) => (modalCross ? "flex !important" : "none")};
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  transition: all 1s ease;

  img {
    width: 1.3rem;
    height: auto;
  }

  ${({ modalCross }) =>
    modalCross
      ? css`
          position: absolute;
          top: 8%;
          right: 5%;
          z-index: 3000000;

          img {
            width: 2rem;
          }
          @media (max-width: 800px), (max-height: 1280px) {
            top: 4%;
    }
        `
      : ""}


   @media (max-width : 412px), (max-height : 823px) {
    ${({ modalCross }) =>
    modalCross
      ? css`
          top: 4%;
          right: 5%;

          img {
            width: 2rem;
          }
        `
      : ""}
   }   

  @media (max-width: 828px) {
    display: ${({ genreListMenuState }) =>
      genreListMenuState === true ? "flex " : "none"};
    transition: all 1s ease;

    ${({ genreListMenuState }) =>
      genreListMenuState === true
        ? css`
            position: absolute;
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
        ? css`
            position: absolute;
            top: -1.5%;
            right: 0;
          `
        : ""}
  }
`;

export default CrossIconDecoration;
