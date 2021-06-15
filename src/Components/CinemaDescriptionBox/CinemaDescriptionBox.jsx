import CinemaDescriptionBoxDescriptionDecoration from "./CinemaDescriptionBoxDecoration";
import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import banner from "../../assets/backgrounds/banner.jpg";
const CinemaDescriptionBox = ({ pageTitle }) => {
  return (
    <CinemaDescriptionBoxDescriptionDecoration>
      <HeroSection banner={banner} modalBox />
      <CrossIcon modalCross />
      <PageTitle modalBox>
        <span>{pageTitle}</span>
      </PageTitle>
      <button className="play-button"></button>
    </CinemaDescriptionBoxDescriptionDecoration>
  );
};

export default CinemaDescriptionBox;
