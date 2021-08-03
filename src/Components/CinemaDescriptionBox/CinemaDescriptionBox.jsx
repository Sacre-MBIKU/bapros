import CinemaDescriptionBoxDescriptionDecoration from "./CinemaDescriptionBoxDecoration";
import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import CinemaCardCredits from "../../Shared_Components/CinemaCard/CinemaCardCredits";
import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";
import { useState } from "react";
const CinemaDescriptionBox = ({
  pageTitle,
  onClick,
  cinemaDescription,
  movieCredits,
  movieCasting,
  similarMovies,
  videoKey,
}) => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

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
  const movies =
    similarMovies === undefined ? "" : Object.values(similarMovies);

    const plaVideo = () => {
      setIsVideoPlayed(!isVideoPlayed);
    }

  return (
    <CinemaDescriptionBoxDescriptionDecoration
      cinemaDescription={cinemaDescription}
      trailerVideo = {isVideoPlayed}
    >
      <HeroSection banner={banner} modalBox />
      <CrossIcon modalCross onClick={onClick} />
      <PageTitle modalBox>
        <span>{movieCredits === undefined ? "chargement" : pageTitle}</span>
      </PageTitle>
      <iframe
        className='trailer-video'
        title='trailler'
        width='420'
        height='315'
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=0&mute=1`}
      ></iframe>
      <button className='play-button' onClick = {plaVideo}></button>
      <div className='cinema-overview-container'>
        <h4 className='cinema-overview--title'>Déscription</h4>
        <p className='cinema-overview--content'>
          {movieCredits === undefined ? "chargement" : movieCredits.overview}
        </p>
      </div>

      <div className='cinema-overview-infos'>
        <div className='cinema-overview--releaser'>
          <h4 className='releaser-title'>Réalisateur</h4>
          <CinemaCardCredits
            movieProperty={
              movieCasting === undefined ? "chargement" : movieCasting
            }
            banner={bannerDirector}
          />
        </div>
        <ul className='cinema-overview--more-info'>

        <li>
            Réalisé en :{" "}
            {movieCredits === undefined ? "chargement" : movieCredits.release_date}
          </li>
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

      <div className='cinema-overview-casting-actor'>
        <h4 className='casting-actor--title'>Casting</h4>
        <div className='casting-actor--list'>
          {movieCasting.actors === undefined
            ? ""
            : actors.map((actor, key) => (
                <CinemaCardCredits key={key} movieProperty={actor} />
              ))}
        </div>
      </div>

      <div className='cinema-overview--similar-cinema'>
        <h4 className='similar-cinema--title'>Affiches Similaires</h4>
        <div className='similar-cinema--list'>
          {similarMovies !== undefined
            ? movies.map((movie, key) => (
                <CinemaCard key={key} movieProperty={movie}></CinemaCard>
              ))
            : ""}
        </div>
      </div>
    </CinemaDescriptionBoxDescriptionDecoration>
  );
};

export default CinemaDescriptionBox;
