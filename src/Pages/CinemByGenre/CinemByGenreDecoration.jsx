import styled from "styled-components";
import {  SECOND_COLOR } from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";

const CinemByGenreDecoration = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5%;

    .filter {
      width: 30%;
      height: 10rem;
      background-color: #0a0c1d;
      border: 3px solid ${SECOND_COLOR};
    }
  }
`;
export default CinemByGenreDecoration;
