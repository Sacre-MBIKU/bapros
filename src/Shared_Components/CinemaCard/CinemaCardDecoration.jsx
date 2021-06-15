import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  from {

    left: 180%;
  }
  to {

    left: -180%;
  }
`;

const CinemaCardDecoration = styled.div`
  min-width: 200px !important;
  max-width: 300px !important;
  height: 360px;
  flex: 1;
  opacity: 0.5;
  transform: scale(0.8);
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: all 300ms linear;

  .loader {
    min-width: 200px;
    width: 300px;
    height: 360px;
    background-color: #ff282922;
    border: 1px solid white;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 180%;
      height: 100%;
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
      z-index: 1;
      transform: skew(45deg);
      transition: 0.5s;
      animation: ${loaderAnimation} 0.5s ease-in-out infinite;
    }
  }

  img {
    min-width: 200px;
    width: 300px;
    height: 360px;
    border-radius: 5px;
    transition: 2s;
  }

  .details {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 1s ease-in-out;
    border-radius: 5px;
    background-color: #04090a73;

    .title {
      background: tomato;
      font-family: Poppins;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      margin: 0;
      padding: 10px 0;
      position: absolute;
      bottom: 0;
      width: 100%;
      transform: perspective(400px) rotateY(90deg);
      transform-origin: right;
      transition: 2s;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 180%;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 1;
    transform: skew(45deg);
    transition: 0.5s;
  }

  &:hover:before {
    left: -180%;
  }

  &:hover img {
    opacity: 0.9;
    filter: grayscale(0%);
    transform: scale(1.1);
  }

  &:hover .details {
    display: flex;
    top: 0;
  }

  &:hover .title {
    transform: perspective(400px) rotateY(0deg);
  }
`;

export default CinemaCardDecoration;