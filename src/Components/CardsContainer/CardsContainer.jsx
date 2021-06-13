import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";
import CardsContainerDecoration from "./CardsContainerDecoration";

const CardsContainer = ({ numberOfCards }) => {
  return (
    <CardsContainerDecoration>
      
     { (numberOfCards === 3) ?
      
        <>
          <CinemaCard loading={true} title="title 1" movieProperty={[]} />
          <CinemaCard loading={true} title="title 2" movieProperty={[]} />
          <CinemaCard loading={true} title="title 3" movieProperty={[]} />
        </>
       : ""
    }
    </CardsContainerDecoration>
  );
};

export default CardsContainer;
