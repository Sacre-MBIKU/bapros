import styled from "styled-components";
import bannerSection from "../../assets/backgrounds/heroSection.jpg";

const HeroSectionDecoration = styled.section`
  min-width: 100vw;
  max-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to top, #080a16, rgba(117, 19, 93, .4)),
    url("${({ banner }) => banner || bannerSection}");
  background-size: cover;
  background-position: center;
`;

export default HeroSectionDecoration;
