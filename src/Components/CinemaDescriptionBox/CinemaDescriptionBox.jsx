import CinemaDescriptionBoxDescriptionDecoration from "./CinemaDescriptionBoxDecoration";
import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import CinemaCardCredits from "../../Shared_Components/CinemaCard/CinemaCardCredits";
import releaer from "../../assets/backgrounds/releaser.jpg";
const CinemaDescriptionBox = ({
  pageTitle,
  onClick,
  cinemaDescription,
  movieCredits,
  movieCasting,
}) => {
  const banner =
    movieCredits === undefined
      ? ""
      : `https://image.tmdb.org/t/p/w500${movieCredits.backdrop_path}`;
  const bannerDirector =
    movieCasting.director === undefined
      ? ""
      : `https://image.tmdb.org/t/p/w500${movieCasting.director.profile_path}`;
  const actors =
    movieCasting.actors === undefined ? "" : Object.values(movieCasting.actors);
  return (
    <CinemaDescriptionBoxDescriptionDecoration
      cinemaDescription={cinemaDescription}
    >
      {console.log("director", movieCasting.director)}
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
          <CinemaCardCredits
            movieProperty={
              movieCasting === undefined ? "chargement" : movieCasting
            }
            banner={bannerDirector}
          />
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
          {movieCasting.actors === undefined
            ? ""
            : actors.map((actor) => (
                <CinemaCardCredits movieProperty={actor} banner={releaer} />
              ))}
        </div>
      </div>

      <div className="cinema-overview--similar-cinema">
        <h4 className="similar-cinema--title">Affiches Similaires</h4>
        <div className="similar-cinema--list">
          <CinemaCardCredits movieProperty={[]} banner={releaer} />
          <CinemaCardCredits movieProperty={[]} banner={releaer} />
          <CinemaCardCredits movieProperty={[]} banner={releaer} />
          <CinemaCardCredits movieProperty={[]} banner={releaer} />
        </div>
      </div>
    </CinemaDescriptionBoxDescriptionDecoration>
  );
};

export default CinemaDescriptionBox;
