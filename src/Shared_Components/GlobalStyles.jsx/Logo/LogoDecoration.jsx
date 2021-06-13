import styled, { css } from "styled-components";
import { BACKGROUND_COLOR, FIRST_COLOR, SECOND_COLOR } from "../GlobalStyles";

const LogoDecoration = styled.a`
  font-weight: bold;
  font-size: 1.4rem;
  .logo-first-part {
    color: ${FIRST_COLOR};
    padding-bottom: 0.3rem;
    border-bottom: 3px solid ${SECOND_COLOR};
    ${({ secondAppMode }) =>
      secondAppMode
        ? css`
            border-bottom: 3px solid ${BACKGROUND_COLOR};
          `
        : ""}
  }
  .logo-second-part {
    color: ${SECOND_COLOR};
    ${({ secondAppMode }) =>
      secondAppMode
        ? css`
            color: ${BACKGROUND_COLOR};
          `
        : ""}
  }
`;

export default LogoDecoration;
