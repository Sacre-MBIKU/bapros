import styled from "styled-components";

const CinemaContainerDecoration = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-around;
  padding: 1.5rem 0;

  .see-more-container {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .border-bottom {
    width: 100%;
    padding: 0 25%;
    margin-top: 2rem;
    height: 0.5px;
  }

  hr {
    color: #11010176;
    font-size: 1px;
  }

  @media (min-width: 819px) {
    width: ${({ width }) => (width ? "65%" : "")};
  }
`;

export default CinemaContainerDecoration;
