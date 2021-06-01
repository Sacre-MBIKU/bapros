//On va initialiser le projet en donnant les styles principaux
import { Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import GlobalStyles from "./Shared_Components/GlobalStyles.jsx/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Home exact to="/" />
      </Switch>
    </>
  );
};
export default App;
