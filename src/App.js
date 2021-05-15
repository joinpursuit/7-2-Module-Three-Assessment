import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import People from "./Components/People";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/people" component={People} />
      <Route path="/locations" component={Locations} />
    </div>
  );
}

export default App;