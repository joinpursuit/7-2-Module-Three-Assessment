import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"

function App() {
  return (
    <div className="app">
      <header>Welcome to GhibliApp</header>
      <nav>
        <NavLink to={"/"}>
          <img
            id="logo"
            src="https://cdnb.artstation.com/p/assets/images/images/029/937/023/large/benoit-denis-yasuke.jpg?1599081304"
            alt="ghibli-logo"
          />
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </nav>
      <Switch>
      <Route path="/movies" component={Movies}/>
      <Route path="/people" component={People}/>
      <Route path="/locations" component={Locations}/>
      </Switch>
    </div>
  );
}

export default App;
