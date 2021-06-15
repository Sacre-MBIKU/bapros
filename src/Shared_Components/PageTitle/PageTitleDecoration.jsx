import styled from "styled-components";
import { FIRST_COLOR, SECOND_COLOR } from "../GlobalStyles.jsx/GlobalStyles";

const PageTitleDecoration = styled.h1`
  position: absolute;
  text-align: center;
  width: 40%;
  left: 10%;
  top:  ${({modalBox}) => modalBox ? "16%" : "50%"};
  transform: translateY(-50%);
  color: ${FIRST_COLOR};
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1rem 0rem 0;
  border-right: 3px solid ${SECOND_COLOR};

  span {
  color: ${SECOND_COLOR};
  }
`;

export default PageTitleDecoration;
