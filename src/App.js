import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
