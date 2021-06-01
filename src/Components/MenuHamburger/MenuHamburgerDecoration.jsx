import styled from "styled-components";
import { SECOND_COLOR } from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const MenuHamburgerDecoration = styled.i`
  @media (max-width: 768px) {
    display: ${({ isDisplayed }) => (isDisplayed === false ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 2.2rem;
    height: 1.7rem;
    cursor: pointer;

    span {
      width: 100%;
      height: 0.3rem;
      background-color: ${SECOND_COLOR};
      border-radius: 0.1rem;
    }
  }
`;

export default MenuHamburgerDecoration;
