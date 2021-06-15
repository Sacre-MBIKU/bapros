import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";
import bannerButton from "../../assets/icons/play.svg";
const CinemaDescriptionBoxDecoration = styled.article`
  width: 100%;
  min-height: 100vh;
  background-color: ${BACKGROUND_COLOR};
  border: 3px solid ${SECOND_COLOR};
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .play-button {
    position: absolute;
    left: 65%;
    transform: translate(-50%, -50%);
    top: 15%;
    background-image: url(${bannerButton});
    width: 3rem;
    height: 3rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default CinemaDescriptionBoxDecoration;
