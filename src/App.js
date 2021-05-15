import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import People from "./Components/People";

function App() {
  const [color,setColor] = useState('');
  return (
    <div className="app">
      <main style={{background: color}}>
        <NavBar setColor={setColor}/>
          <Switch>
            <Route path={"/movies"} component={Movies}/>
            <Route path={"/people"} component={People}/>
            <Route path={"/locations"} component={Locations}/>
            <Route exact path={"/"} component={Home}/>
          </Switch>
      </main>
    </div>
  );
}

export default App;