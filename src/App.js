import "./App.css";
import NavBar from "./Components/NavBar"
import { Route } from "react-router-dom"
import Home from "./Components/Home"
import Movies from "./Components/Movies"
import People from "./Components/People"

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Route exact path="/" component = {Home} />
        <Route path="/movies" component = {Movies} />
        <Route exact path="/people" component = {People} />
        {/* <Route exact path="/locations" component = {Locations} /> */}
      </main>
    </div>
  );
}

export default App;