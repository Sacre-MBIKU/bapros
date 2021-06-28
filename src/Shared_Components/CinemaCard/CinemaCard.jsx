import CinemaCardDecoration from "./CinemaCardDecoration";

const CinemaCard = ({banner, movieProperty, onClick, tv }) => {
  let urlPoster = banner;
  let title = "";
  if(movieProperty !== undefined) {
    title = tv ?  movieProperty.name : movieProperty.title;
     urlPoster = `https://image.tmdb.org/t/p/w500${movieProperty.poster_path}`;
  }
  
  return (
    <>
      <CinemaCardDecoration onClick={onClick}>
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
export default CinemaCard;
