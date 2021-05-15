import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path={"/movies"} component={Movies} />
        <Route path={"/people"} component={People} />
        <Route path={"/locations"} component={Locations} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
