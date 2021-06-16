import styled, { css } from "styled-components";
import { FIRST_COLOR, SECOND_COLOR } from "../GlobalStyles.jsx/GlobalStyles";

const PageTitleDecoration = styled.h1`
  position: absolute;
  text-align: center;
  width: 40%;
  left: 10%;
  top: ${({ modalBox }) => (modalBox ? "9%" : "50%")};
  transform: translateY(-50%);
  color: ${FIRST_COLOR};
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1rem 0rem 0;
  border-right: 3px solid ${SECOND_COLOR};

  span {
    color: ${SECOND_COLOR};
  }

  ${({ modalBox }) =>
    modalBox
      ? css`
          @media (max-width: 690px) {
            font-size: 1.2rem;
          }
          @media (max-width: 1042px) {
            font-size: 1.5rem;
          }
          @media (max-width: 414px), (max-height: 896px) {
            top: 10%;
            span {
              font-size: 0.9rem;
            }
          }
          @media (max-width: 414px), (max-height: 846px) {
            top: 7%;
          }
          @media (max-width: 412px), (max-height: 823px) {
            top: 6%;
            span {
              font-size: 0.9rem;
            }
          }
        `
      : ""}
`;

export default PageTitleDecoration;
