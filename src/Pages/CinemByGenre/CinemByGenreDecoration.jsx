import styled, { css } from "styled-components";

const CinemByGenreDecoration = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 100;

  main {
    margin-top: 12%;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .cards-container-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 5%;
      position: relative;
    }


    .filter-hamburger {
      display: none;
      position: fixed;
      right: 2%;
      top: 25%;

      button {
        padding: .5rem 1rem;
        font-weight: bold;
        font-size: .9rem;
        cursor: pointer;

        ${({genreListMenuState}) => genreListMenuState ? 
        css `display : none` :
        ""}
      }
    }

    @media (max-width: 830px) {
      .filter {
        display: none;
      }
      .filter-hamburger {
        display: block;
      }
    }
  }
`;
export default CinemByGenreDecoration;
