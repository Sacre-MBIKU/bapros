import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import TitleCategory from "../../Components/TitleCategory/TitleCategory";
import Button from "../../Shared_Components/Button/Button";
import CinemaContainerDecoration from "./CinemaContainerDecoration";

const CinemaContainer = ({numberOfCards, cinemaGenre}) => {
  return (
    <CinemaContainerDecoration>
      <TitleCategory title={cinemaGenre} />
      <CardsContainer numberOfCards = {numberOfCards}/>
      <div className="see-more-container">
        <Button>voir plus</Button>
      </div>
      <div className="border-bottom">
        <hr />
      </div>
    </CinemaContainerDecoration>
  );
};

export default CinemaContainer;
