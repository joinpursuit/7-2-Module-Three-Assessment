import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./Components/Movies";
import Home from "./Components/Home";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Route path={"/movies"} component={Movies} />
      <Route path={"/people"} component={People} />
      <Route path={"/locations"} component={Locations} />
      <Route exact path={"/"} component={Home} />
    </div>
  );
}

export default App;
