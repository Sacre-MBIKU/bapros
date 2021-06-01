//On va initialiser le projet en donnant les styles principaux

import Home from "./Pages/Home/Home";
import GlobalStyles from "./Shared_Components/GlobalStyles.jsx/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};
export default App;
