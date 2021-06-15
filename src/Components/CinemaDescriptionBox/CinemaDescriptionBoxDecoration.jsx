import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  FIRST_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";
import bannerButton from "../../assets/icons/play.svg";
const CinemaDescriptionBoxDecoration = styled.article`
  width: 100%;
  min-height: 50vh;
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

  .cinema-overview-container {
    width: 100%;
    height: auto;
    margin-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    .cinema-overview--title {
      font-size: 1.8rem;
      color: ${FIRST_COLOR};
      border-bottom: 3px solid ${SECOND_COLOR};
      height: 2.5rem;
      margin-bottom: 3rem;
    }

    .cinema-overview--content {
      width: 70%;
      font-size: 1rem;
      color: ${FIRST_COLOR};
      min-height: auto;
    }
  }

  .cinema-overview-infos {
    display: flex;
    width: 100%;
    padding: 0 10%;
    justify-content: space-between;
    height: 26rem;

    .cinema-overview--releaser {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${FIRST_COLOR};

      .releaser-title {
        font-size: 1.2rem;
      }

    }

    .cinema-overview--more-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: ${FIRST_COLOR};
      font-size: 1.1rem;
      li {
          padding-left: 0.5rem;
          border-left: 3px solid ${SECOND_COLOR};
      }
    }
  }
`;

export default CinemaDescriptionBoxDecoration;
