import MenuLinksDecoration from "./MenuLinksDecoration";
import {Link} from "react-router-dom";

const MenuLinks = () => {
    return(
        <MenuLinksDecoration>
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