import "./App.css";
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Movies from "./Components/Movies"


function App() {
  return (
    <div className="app">
      <main>
        <NavBar/>
        <Switch>
          
          <Route path={"/movies"} component={Movies} />
          <Route exact path={"/"} component={Home} />
        
   
      
      </Switch>


      </main>
    </div>
  );
}

export default App;