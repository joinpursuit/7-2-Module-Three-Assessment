import "./App.css";
import { Route, Switch } from "react-router-dom"
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";
import Home from "./Components/Home"
function App() {
  return (
    <div className="app">
       <NavBar />
      <Switch>
        <Route path={"/movies"} component={Movies} />
        <Route path={"/locations"} component={Locations} />
        <Route path={"/people"} component={People} />
        <Route path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;