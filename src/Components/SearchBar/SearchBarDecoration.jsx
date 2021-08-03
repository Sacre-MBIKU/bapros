import styled, { css } from "styled-components";
import {
  BACKGROUND_COLOR,
  FIRST_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";
import seacrIcon from "../../assets/icons/search-icon.svg";

const SearchBarDecoration = styled.form`
  width: 15rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-search {
    background-color: transparent;
    width: 80%;
    height: 100%;
    border: 0.5px solid ${SECOND_COLOR};
    color: ${FIRST_COLOR};
    font-size: 0.7rem;
    padding: 0 1rem;
    opacity: 1;

    ${({ secondAppMode }) =>
      secondAppMode
        ? css`
            border: 0.5px solid ${BACKGROUND_COLOR};
          `
        : ""}
    @media (max-width: 768px) {
      ${({ secondAppMode }) =>
        secondAppMode
          ? css`
              border: 0.5px solid ${SECOND_COLOR};
            `
          : ""}
    }
  }

  input:focus {
    border-style: none;
    border-color: ${SECOND_COLOR};
  }

  .submit-button {
    background-color: transparent;
    background-image: url(${seacrIcon});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    width: 15%;
    height: 100%;
    border: 0.5px solid ${SECOND_COLOR};
    font-size: 1rem;
    cursor: pointer;
    color: ${FIRST_COLOR};
    ${({ secondAppMode }) =>
      secondAppMode
        ? css`
            border: 0.5px solid ${BACKGROUND_COLOR};
          `
        : ""}
    @media (max-width: 768px) {
      ${({ secondAppMode }) =>
        secondAppMode
          ? css`
              border: 0.5px solid ${SECOND_COLOR};
            `
          : ""}
    }
  }

  @media (min-width: 768px) {
    width: 35rem;
    height: 3rem;
  }
`;

export default SearchBarDecoration;
