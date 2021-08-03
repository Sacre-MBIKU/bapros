import MenuLinks from "../../Components/ListLinks/MenuLinks";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";
import MenuDecoration from "./MenuDecoration";

const Menu = ({secondAppMode, onClick, isDisplayed, modalCross}) => {
  return (
    <MenuDecoration  isDisplayed = {isDisplayed}>
      <CrossIcon onClick = {onClick} modalCross = {modalCross}/>
      <MenuLinks secondAppMode = {secondAppMode}/>
      <SearchBar secondAppMode = {secondAppMode}/>
    </MenuDecoration>
  );
};

export default Menu;
