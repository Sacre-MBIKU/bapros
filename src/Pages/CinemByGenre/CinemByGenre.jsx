import Navbar from "../../Layouts/Navbar/Navbar";
import CinemByGenreDecoration from "./CinemByGenreDecoration";

const CinemByGenre = ({ genre }) => {
  return <CinemByGenreDecoration>
      <Navbar secondAppMode = {true}/>
  </CinemByGenreDecoration>;
};

export default CinemByGenre;
