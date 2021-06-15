import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";
import CardsContainerDecoration from "./CardsContainerDecoration";

const CardsContainer = ({ numberOfCards, width, onClick }) => {
  return (
    <CardsContainerDecoration width={width}>
      {numberOfCards === 4 ? (
        <>
          <CinemaCard onClick = {onClick} loading={true} title="title 1" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 2" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 3" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 3" movieProperty={[]} />
        </>
      ) : (
        (
          <>
          <CinemaCard onClick = {onClick} loading={true} title="title 1" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 2" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 3" movieProperty={[]} />
          
          <CinemaCard onClick = {onClick} loading={true} title="title 1" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 2" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 3" movieProperty={[]} />

          <CinemaCard onClick = {onClick} loading={true} title="title 1" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 2" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 3" movieProperty={[]} />

          <CinemaCard onClick = {onClick} loading={true} title="title 1" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 2" movieProperty={[]} />
          <CinemaCard onClick = {onClick} loading={true} title="title 3" movieProperty={[]} />
        </>
        )
      )}
    </CardsContainerDecoration>
  );
};

export default CardsContainer;
