import CinemaCardDecoration from "./CinemaCardDecoration";

const CinemaCardCredits = ({ banner, movieProperty, onClick, tv }) => {
  let urlPoster = banner;
  let title = "";
  if (movieProperty !== undefined) {
    title =
      movieProperty.director === undefined
        ? movieProperty.name
        : movieProperty.director.name;
    urlPoster =
      movieProperty.director === undefined
        ? `https://image.tmdb.org/t/p/w500${movieProperty.profile_path}`
        : `https://image.tmdb.org/t/p/w500${movieProperty.director.profile_path}`;
    console.log("your director", urlPoster);
  }

  return (
    <>
      <CinemaCardDecoration
        noCursor
        data-id={movieProperty !== undefined ? movieProperty.id : 0}
        onClick={onClick}
      >
        {movieProperty === undefined ? (
          <div className="loader">
            <h3 className="title">{title}</h3>
          </div>
        ) : (
          <>
            <img src={urlPoster} alt={title} />

            <div className="details">
              <h3 className="title">{title}</h3>
              <div className="overview">{}</div>
            </div>
          </>
        )}
      </CinemaCardDecoration>
    </>
  );
};
export default CinemaCardCredits;
