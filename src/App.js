import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/movies"} component={Movies} />
        <Route exact path={"/people"} component={People} />
        <Route exact path={"/locations"} component={Locations} />
      </Switch>
    </div>
  );
}

export default App;
