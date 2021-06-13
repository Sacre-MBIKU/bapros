import MenuHamburgerDecoration from "./MenuHamburgerDecoration";

const MenuHamburger = ({ isDisplayed, onClick, secondAppMode }) => {
  return (
    <MenuHamburgerDecoration
      secondAppMode={secondAppMode}
      onClick={onClick}
      isDisplayed={isDisplayed}
    >
      <span></span>
      <span></span>
      <span></span>
    </MenuHamburgerDecoration>
  );
};

export default MenuHamburger;
