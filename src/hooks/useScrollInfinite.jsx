import { useState } from "react";

const useScrollInfinite = () => {
  const [indexGenreToRender, setIndexGenreToRender] = useState(0);
  const defineScrollPosition = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight === scrollHeight) {
      setIndexGenreToRender(indexGenreToRender + 1);
    } 
  };

  return [ indexGenreToRender, defineScrollPosition];
};

export default useScrollInfinite;
