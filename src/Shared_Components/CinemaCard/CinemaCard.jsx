import CinemaCardDecoration from "./CinemaCardDecoration";

const CinemaCard = ({ movieProperty, loading, onClick, title }) => {
  const { id, poster_path } = movieProperty;
  const urlPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <CinemaCardDecoration onClick={() => onClick(id)}>
        {loading === true ? (
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
