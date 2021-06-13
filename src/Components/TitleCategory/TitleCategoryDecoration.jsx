import styled from "styled-components";
import {
  FIRST_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const TitleCategoryDecoration = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  color: ${FIRST_COLOR};
  padding: 0.4rem 0.4rem;
  border-left: 3px solid ${SECOND_COLOR};
  margin-left: 2rem;
  margin-bottom: 5rem;
  z-index: 1000000;
`;

export default TitleCategoryDecoration;
