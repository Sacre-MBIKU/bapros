import { Switch, Route } from "react-router-dom";
import CinemByGenre from "./Pages/CinemByGenre/CinemByGenre";
import Home from "./Pages/Home/Home";
import Movie from "./Pages/Movie/Movie";
import Serie from "./Pages/Serie/Serie";
import GlobalStyles from "./Shared_Components/GlobalStyles.jsx/GlobalStyles";

require("dotenv").config();

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={"/cinemabygenre/:cinemaGenreId"} component = {CinemByGenre}>
        </Route>
        <Route component = {Movie}  path={"/movies"}>
        </Route>
        <Route path={"/series"} component = {Serie } />
        <Route>
          <Home exact path={"/"} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
