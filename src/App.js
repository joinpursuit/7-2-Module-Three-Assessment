import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Route  exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </main>
    </div>
  );
}

export default App;