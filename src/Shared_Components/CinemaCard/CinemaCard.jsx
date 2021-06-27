import CinemaCardDecoration from "./CinemaCardDecoration";

const CinemaCard = ({banner, movieProperty, onClick }) => {
  let urlPoster = banner;
  let title = "";
  if(movieProperty !== undefined) {
     title = movieProperty.title;
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
          {console.log(movieProperty)}
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
