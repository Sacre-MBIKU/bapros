import styled, { css } from "styled-components";
import {
  BACKGROUND_COLOR,
  FIRST_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const MenuLinksDecoration = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-around;

  .menu-link {
    color: ${FIRST_COLOR};
    font-size: 1.5rem;
    margin: 0.8rem 0;
    padding-bottom: 0%.5rem;
    border-bottom: 3px solid ${SECOND_COLOR};

    ${({ secondAppMode }) =>
      secondAppMode
        ? css`
            border-bottom: 3px solid ${BACKGROUND_COLOR};
          `
        : ""}

    @media (max-width: 768px) {
      ${({ secondAppMode }) =>
        secondAppMode
          ? css`
              border-bottom: 3px solid ${SECOND_COLOR};
            `
          : ""}
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem 0;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default MenuLinksDecoration;
