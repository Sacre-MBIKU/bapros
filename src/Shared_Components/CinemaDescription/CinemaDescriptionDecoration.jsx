import styled from "styled-components";
const CinemaDescriptionDecoration = styled.div`
  display: ${({ cinemaDescription }) => (cinemaDescription ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 400vh;
  max-height: 800vh;
  margin-bottom: 10%;
  padding: 10% 20% 0 20%;
  background-color: #080a16b2;
  z-index: 40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

  @media (max-width: 768px) {
    padding: 12% 5% 0% 5%;
  }
`;

export default CinemaDescriptionDecoration;
