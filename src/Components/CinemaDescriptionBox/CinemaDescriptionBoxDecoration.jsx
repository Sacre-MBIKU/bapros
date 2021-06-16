import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  FIRST_COLOR,
  SECOND_COLOR,
} from "../../Shared_Components/GlobalStyles.jsx/GlobalStyles";
import bannerButton from "../../assets/icons/play.svg";
const CinemaDescriptionBoxDecoration = styled.article`
  width: 100%;
  min-height: 500vh;
  max-height: 800vh;
  background-color: ${BACKGROUND_COLOR};
  border: 3px solid ${SECOND_COLOR};
  display: ${({ cinemaDescription }) => (cinemaDescription ? "none" : "flex")};
  flex-wrap: wrap;
  position: relative;
  transition: all 0.5s ease-in;

  .play-button {
    position: absolute;
    left: 65%;
    transform: translate(-50%, -50%);
    top: 8%;
    background-image: url(${bannerButton});
    width: 3rem;
    height: 3rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 414px), (max-height: 896px) {
      top: 4%;
    }
    @media (max-width: 412px), (max-height: 823px) {
      top: 3%;
      left: 80%;
    }
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
      @media (max-width: 384px), (max-height: 640px) {
        font-size: 0.7rem;
      }
    }
  }

  .cinema-overview-infos {
    display: flex;
    width: 100%;
    padding: 0 10%;
    justify-content: space-between;
    height: 26rem;

    @media (max-width: 414px), (max-height: 896px) {
      flex-direction: column;
      margin-top: -7rem;
      margin-bottom: 7rem;
    }
    @media (max-width: 412px), (max-height: 823px) {
      flex-direction: column;
    }

    @media (max-width: 412px), (max-height: 731px) {
      margin-top: -7rem;
      margin-bottom: 7rem;
    }

    .cinema-overview--releaser {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${FIRST_COLOR};

      .releaser-title {
        font-size: 1.2rem;
        border-bottom: 3px solid ${SECOND_COLOR};
        height: 2.5rem;
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
        @media (max-width: 414px), (max-height: 896px) {
          margin-bottom: 2rem;
        }
        @media (max-width: 412px), (max-height: 823px) {
          margin-bottom: 2rem;
        }
      }
    }
  }

  .cinema-overview-casting-actor {
    display: flex;
    padding: 0 10%;
    justify-content: center;
    flex-wrap: wrap;

    .casting-actor--title {
      color: ${FIRST_COLOR};
      font-size: 1.2rem;
      border-bottom: 3px solid ${SECOND_COLOR};
      height: 2.5rem;
    }

    .casting-actor--list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }

  .cinema-overview--similar-cinema {
    display: flex;
    padding: 0 10%;
    justify-content: center;
    flex-wrap: wrap;

    .similar-cinema--title {
      color: ${FIRST_COLOR};
      font-size: 1.2rem;
      border-bottom: 3px solid ${SECOND_COLOR};
      height: 2.5rem;
    }

    .similar-cinema--list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
  }

  @media (max-width: 1140px) {
    min-height: 750vh;

    .cinema-overview-casting-actor,
    .cinema-overview--similar-cinema {
      align-items: center;

      .casting-actor--list,
      .similar-cinema--list {
        justify-content: center;
      }
    }
  }

  @media (max-width: 800px), (max-height: 1280px) {
    min-height: 450vh;
  }
  @media (max-width: 834px), (max-height: 1112px) {
    min-height: 550vh;
  }

  @media (max-width: 768px), (max-height: 1024px) {
    min-height: 300vh;
  }

  @media (max-width: 414px), (max-height: 896px) {
    min-height: 650vh;
  }

  @media (max-width: 414px), (max-height: 736px) {
    min-height: 750vh;
  }

  @media (max-width: 360px), (max-height: 640px) {
    min-height: 780vh;
  }
`;

export default CinemaDescriptionBoxDecoration;
