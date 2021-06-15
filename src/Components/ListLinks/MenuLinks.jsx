import MenuLinksDecoration from "./MenuLinksDecoration";
import { Link } from "react-router-dom";

const MenuLinks = ({ secondAppMode }) => {
  return (
    <MenuLinksDecoration secondAppMode={secondAppMode}>
      <Link className="menu-link" to="/series">
        Séries
      </Link>
      <Link className="menu-link" to="/movies">
        Films
      </Link>
    </MenuLinksDecoration>
  );
};

export default MenuLinks;
