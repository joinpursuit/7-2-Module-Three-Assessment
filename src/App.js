import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"
import {Route, Switch} from "react-router-dom"

import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/people" component={People}></Route>
          <Route path="/locations" component={Locations}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;