import MenuLinksDecoration from "./MenuLinksDecoration";
import {Link} from "react-router-dom";

const MenuLinks = ({secondAppMode}) => {
    return(
        <MenuLinksDecoration secondAppMode = {secondAppMode}>
            <Link className ="menu-link" to = "/">
                Séries
            </Link>
            <Link className ="menu-link" to = "/">
                Films
            </Link>
        </MenuLinksDecoration>
    )
}

export default MenuLinks