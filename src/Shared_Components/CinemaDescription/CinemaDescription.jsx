import CinemaDescriptionDecoration from "./CinemaDescriptionDecoration";
import CinemaDescriptionBox from "../../Components/CinemaDescriptionBox/CinemaDescriptionBox";
const CinemaDescription = ({ cinemaDescription, onClick }) => {
  return (
    <CinemaDescriptionDecoration cinemaDescription={cinemaDescription}>
      <CinemaDescriptionBox pageTitle="Spiderman Homecoming" onClick = {onClick} />
    </CinemaDescriptionDecoration>
  );
};

export default CinemaDescription;
