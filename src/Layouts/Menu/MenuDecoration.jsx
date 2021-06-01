import styled from "styled-components";
import { BACKGROUND_COLOR } from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const MenuDecoration = styled.ul`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  transition: all 1s ease;

  @media (max-width: 768px) {
    display: ${({ isDisplayed }) => (isDisplayed ? "flex" : "none")};
    padding: 0.9rem;
    z-index: 100;
    background-color: ${BACKGROUND_COLOR};
    flex-direction: column;
    transition: all 1s ease;
  }
`;

export default MenuDecoration;
