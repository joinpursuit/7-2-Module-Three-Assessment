import "./App.css";
import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from "./components/navbar";
import Home from './components/home'
import Locations from './components/locations'
import People from './components/people'
import Movies from './components/movies'

function App() {
  return (
    <div className="app">
     <NavBar />
     <Route exact path='/' component={ Home } />
     <Route path='/locations' component={ Locations } />
     <Route path='/people' component={ People } />
     <Route path='/movies' component={ Movies } />

    </div>
  );
}

export default App;