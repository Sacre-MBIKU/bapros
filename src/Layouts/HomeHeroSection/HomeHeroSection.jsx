import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import Navbar from "../Navbar/Navbar";
import HomeHeroSectionDecoration from "./HomeHeroSectionDecoration";

const HomeHeroSection = ({ navBarYPosition, banner, pageTitle }) => {
  return (
    <HomeHeroSectionDecoration>
      <HeroSection banner={banner}>
        <Navbar navBarYPosition={navBarYPosition} />
        <PageTitle>
          {pageTitle}
          <span>portable</span>
        </PageTitle>
      </HeroSection>
    </HomeHeroSectionDecoration>
  );
};

export default HomeHeroSection;
