import styled from "styled-components";
import {
  FIRST_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const CinemaGenreListDecoration = styled.aside`
  position: fixed;
  width: 32%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
  height: 20rem;
  background-color: #0a0c1d;
  border-left: 3px solid ${SECOND_COLOR};
  right: 2%;
  top: 29%;

  h3 {
    color: ${SECOND_COLOR};
    font-weight: bold;
  }
  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-top: 1rem;
  }

  a {
    font-size: 1.2rem;
    color: ${FIRST_COLOR};
    transition: all 0.5s ease-in;

    :hover {
      color: ${SECOND_COLOR};
    }
  }
  @media (max-width: 567px) {
    width: 100%;
  }
  @media (max-width: 667px) {
    width: 40%;
  }
  @media (max-width: 830px) {
    display: ${({ genreListMenuState }) =>
      genreListMenuState ? "flex" : "none"};
  }
`;
export default CinemaGenreListDecoration;
