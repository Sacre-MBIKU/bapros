import CinemaCardDecoration from "./CinemaCardDecoration";

const CinemaCard = ({banner, movieProperty, loading, onClick, title }) => {
  const urlPoster = banner;
  return (
    <>
      <CinemaCardDecoration onClick={() => onClick}>
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
