import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import People from './components/People'
import Locations from './components/Locations'
import {Route, Switch} from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Switch>
          <Route path={"/movies"} component={Movies}/>
          <Route path={"/people"} component={People}/>
          <Route path={"/locations"} component={Locations}/>
          <Route exact path={"/"} component={Home}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;