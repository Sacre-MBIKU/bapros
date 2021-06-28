import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";
import CardsContainerDecoration from "./CardsContainerDecoration";

const CardsContainer = ({ numberOfCards, width, onClick, cinemaList, tv }) => {
  const cinemaListLimited = [];
  if (cinemaList !== undefined) {
    for (let currentId = 0; currentId < numberOfCards; currentId++) {
      cinemaListLimited.push(cinemaList[currentId]);
    }
  }
  return (
    <CardsContainerDecoration width={width}>
      {cinemaListLimited.map((cinema, key) => {
        return (
          <CinemaCard
            onClick={onClick}
            movieProperty={cinema}
            key={key}
            tv = {tv}
          />
        );
      })}
    </CardsContainerDecoration>
  );
};

export default CardsContainer;
