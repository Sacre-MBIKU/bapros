import CinemaDescriptionDecoration from "./CinemaDescriptionDecoration";
import CinemaDescriptionBox from "../../Components/CinemaDescriptionBox/CinemaDescriptionBox";
const CinemaDescription = ({ cinemaDescription }) => {
  return (
    <CinemaDescriptionDecoration cinemaDescription={cinemaDescription}>
      <CinemaDescriptionBox pageTitle="Spiderman Homecoming" />
    </CinemaDescriptionDecoration>
  );
};

export default CinemaDescription;
