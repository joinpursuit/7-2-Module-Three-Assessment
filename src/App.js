import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/movies"} component={Movies} />
          <Route path={"/people"} component={People} />
          <Route path={"/locations"} component={Locations} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
