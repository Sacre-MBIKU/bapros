import MenuLinks from "../../Components/ListLinks/MenuLinks";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import MenuDecoration from "./MenuDecoration";

const Menu = ({onClick, isDisplayed}) => {
  return (
    <MenuDecoration  isDisplayed = {isDisplayed}>
      <CrossIcon onClick = {onClick} />
      <MenuLinks />
      <SearchBar />
    </MenuDecoration>
  );
};

export default Menu;
