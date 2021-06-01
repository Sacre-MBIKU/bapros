import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import Navbar from "../Navbar/Navbar";
import HomeHeroSectionDecoration from "./HomeHeroSectionDecoration";

const HomeHeroSection = () => {
  return (
    <HomeHeroSectionDecoration>
      <HeroSection>
        <Navbar/>
        <PageTitle>
          Tout le septième art dans ton <span>portable</span>
        </PageTitle>
      </HeroSection>
    </HomeHeroSectionDecoration>
  );
};

export default HomeHeroSection;
