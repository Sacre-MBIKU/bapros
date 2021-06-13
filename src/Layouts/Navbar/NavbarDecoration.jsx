import styled, { css } from "styled-components";
import { BACKGROUND_COLOR } from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const NavbarDecoration = styled.nav`
  width: 100%;
  height: auto;
  padding: 1.1rem 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2000000000000000;
  left: 0;
  top: 0;

  ${({ navBarYPosition }) =>
    navBarYPosition
      ? css`
          background-color: ${BACKGROUND_COLOR};
        `
      : ""}
`;

export default NavbarDecoration;
