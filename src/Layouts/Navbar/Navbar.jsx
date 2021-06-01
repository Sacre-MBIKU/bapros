import { useState } from "react";
import MenuHamburger from "../../Components/MenuHamburger/MenuHamburger";
import Logo from "../../Shared_Components/GlobalStyles.jsx/Logo/Logo";
import Menu from "../Menu/Menu";
import NavbarDecoration from "./NavbarDecoration";

const Navbar = () => {
  const [smallDevice, setSmallDevice] = useState(false);

  const toggleDevice = () => {
    setSmallDevice(!smallDevice);
  };

  return (
    <NavbarDecoration>
      <Logo />

      <MenuHamburger onClick={toggleDevice} isDisplayed = {smallDevice}/>
      <Menu onClick={toggleDevice} isDisplayed = {smallDevice}/>
    </NavbarDecoration>
  );
};

export default Navbar;
