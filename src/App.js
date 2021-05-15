import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
