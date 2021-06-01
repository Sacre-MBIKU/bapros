import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import HomeHeroSectionDecoration from "./HomeHeroSectionDecoration";

const HomeHeroSection = ({ children }) => {
  return <HomeHeroSectionDecoration>
      <HeroSection>{children}</HeroSection>
  </HomeHeroSectionDecoration>;
};

export default HomeHeroSection;
