import CinemaDescriptionBoxDescriptionDecoration from "./CinemaDescriptionBoxDecoration";
import HeroSection from "../../Shared_Components/HeroSection/HeroSection";
import PageTitle from "../../Shared_Components/PageTitle/PageTitle";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";
import banner from "../../assets/backgrounds/banner.jpg";
import releaer from "../../assets/backgrounds/releaser.jpg";
const CinemaDescriptionBox = ({ pageTitle , onClick, cinemaDescription}) => {
  return (
    <CinemaDescriptionBoxDescriptionDecoration cinemaDescription = {cinemaDescription}>
      <HeroSection banner={banner} modalBox />
      <CrossIcon modalCross onClick = {onClick}/>
      <PageTitle modalBox>
        <span>{pageTitle}</span>
      </PageTitle>
      <button className="play-button"></button>
      <div className="cinema-overview-container">
        <h4 className="cinema-overview--title">Déscription</h4>
        <p className="cinema-overview--content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, non
          molestias assumenda, illo nihil fugit laboriosam ab quos rerum
          adipisci voluptatum ut, quidem quisquam ex esse dolores. Vel eum, quas
          sapiente modi aut illo quos obcaecati hic? Facere magni deserunt
          voluptatum nisi quo vitae, excepturi animi eius voluptate quia illo
          totam incidunt veritatis aspernatur cum suscipit. Possimus, harum
          recusandae odit iusto voluptates, eum dignissimos, at nulla sit natus
          debitis laboriosam iure. Nesciunt fugit reiciendis fugiat vel ex
          dolore neque minima aliquam numquam rem. Officiis, officia sed eius
          dolorum nostrum distinctio vitae ab nisi, iure, iste minima modi
          numquam ex praesentium. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Beatae, non molestias assumenda, illo nihil fugit
          laboriosam ab quos rerum adipisci voluptatum ut, quidem quisquam ex
          esse dolores. Vel eum, quas sapiente modi aut illo quos obcaecati hic?
          Facere magni deserunt voluptatum nisi quo vitae, excepturi animi eius
          voluptate quia illo totam incidunt veritatis aspernatur cum suscipit.
          Possimus, harum recusandae odit iusto voluptates, eum dignissimos, at
          nulla sit natus debitis laboriosam iure. Nesciunt fugit reiciendis
          fugiat vel ex dolore neque minima aliquam numquam rem. Officiis,
          officia sed eius dolorum nostrum distinctio vitae ab nisi, iure, iste
          minima modi numquam ex praesentium.
        </p>
      </div>

      <div className="cinema-overview-infos">
        <div className="cinema-overview--releaser">
          <h4 className="releaser-title">Réalisateur</h4>
          <CinemaCard movieProperty={[]} banner={releaer} />
        </div>
        <ul className="cinema-overview--more-info">
          <li>Catégorie : Action / Aventure</li>
          <li>Notes : 4.3</li>
          <li>Compagnie : Marvel</li>
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
