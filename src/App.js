import { Component } from "react";
import { Route } from "react-router-dom"
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"

class App extends Component {
  render() {
    return (
      <section className="app">
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
      </section>
    );
  }
}

export default App;
