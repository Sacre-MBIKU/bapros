import { useState } from "react";

const useScroll = () => {
  const [navBarYPosition, setNavBarYPosition] = useState();
  const getNavBarPosition = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop >= 100) {
      setNavBarYPosition(true);
    } else {
      setNavBarYPosition(false);
    }
  };

  return [navBarYPosition, getNavBarPosition];
};

export default useScroll;
