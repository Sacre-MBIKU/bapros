import CinemaDescriptionBoxDescriptionDecoration from "./CinemaDescriptionBoxDecoration";
import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";
import releaer from "../../assets/backgrounds/releaser.jpg";
const CinemaDescriptionBox = ({
  pageTitle,
  onClick,
  cinemaDescription,
  movieCredits,
}) => {
  const banner =
    movieCredits === undefined
      ? ""
      : `https://image.tmdb.org/t/p/w500${movieCredits.backdrop_path}`;
  return (
    <CinemaDescriptionBoxDescriptionDecoration
      cinemaDescription={cinemaDescription}
    >
      <HeroSection banner={banner} modalBox />
      <CrossIcon modalCross onClick={onClick} />
      <PageTitle modalBox>
        <span>{movieCredits === undefined ? "chargement" : pageTitle}</span>
      </PageTitle>
      <button className="play-button"></button>
      <div className="cinema-overview-container">
        <h4 className="cinema-overview--title">Déscription</h4>
        <p className="cinema-overview--content">
          {movieCredits === undefined ? "chargement" : movieCredits.overview}
        </p>
      </div>

      <div className="cinema-overview-infos">
        <div className="cinema-overview--releaser">
          <h4 className="releaser-title">Réalisateur</h4>
          <CinemaCard movieProperty={[]} banner={releaer} />
        </div>
        <ul className="cinema-overview--more-info">
          <li>
            Catégorie :{" "}
            {movieCredits === undefined ? "chargement" : movieCredits.genres}
          </li>
          <li>
            Notes :{" "}
            {movieCredits === undefined
              ? "chargement"
              : movieCredits.popularity / 1000}
          </li>
          <li>
            Compagnie :{" "}
            {movieCredits === undefined
              ? "chargement"
              : movieCredits.production_companies}
          </li>
        </ul>
      </div>

      <div className="cinema-overview-casting-actor">
        <h4 className="casting-actor--title">Casting</h4>
        <div className="casting-actor--list">
          <CinemaCard movieProperty={[]} banner={releaer} />
          <CinemaCard movieProperty={[]} banner={releaer} />
          <CinemaCard movieProperty={[]} banner={releaer} />
          <CinemaCard movieProperty={[]} banner={releaer} />
        </div>
      </div>

      <div className="cinema-overview--similar-cinema">
        <h4 className="similar-cinema--title">Affiches Similaires</h4>
        <div className="similar-cinema--list">
          <CinemaCard movieProperty={[]} banner={releaer} />
          <CinemaCard movieProperty={[]} banner={releaer} />
          <CinemaCard movieProperty={[]} banner={releaer} />
          <CinemaCard movieProperty={[]} banner={releaer} />
        </div>
      </div>
    </CinemaDescriptionBoxDescriptionDecoration>
  );
};

export default CinemaDescriptionBox;
