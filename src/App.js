import "./App.css";
import Homepage from "./Components/Homepage"
import Navbar from "./Components/Navbar"
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"
import ErrorBoundary from "./ErrorBoundary"
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Navbar />
        <Switch>

          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/movies"} component={Movies} />
          <Route exact path={"/people"} component={People} />
          <Route exact path={"/locations"} component={Locations} />
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;