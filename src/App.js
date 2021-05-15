import { Switch, Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";


function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path={"/movies"} component={Movies} />
        <Route path={"/people"} component={People} />
        <Route path={"/locations"} component={Locations} />
        <Route path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;