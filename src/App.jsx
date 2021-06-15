import { Switch } from "react-router-dom";
import CinemByGenre from "./Pages/CinemByGenre/CinemByGenre";
import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/Movie";
import GlobalStyles from "./Shared_Components/GlobalStyles.jsx/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Home exact path="/" />
        <Movie exact path="/movies" />
        <CinemByGenre exact path="/cinemabygenre" />
      </Switch>
    </>
  );
};
export default App;
