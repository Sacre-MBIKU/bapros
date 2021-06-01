import MenuHamburgerDecoration from "./MenuHamburgerDecoration";

const MenuHamburger = ({isDisplayed, onClick}) => {
  return (
    <MenuHamburgerDecoration onClick = {onClick} isDisplayed = {isDisplayed}>
      <span></span>
      <span></span>
      <span></span>
    </MenuHamburgerDecoration>
  );
};

export default MenuHamburger;
