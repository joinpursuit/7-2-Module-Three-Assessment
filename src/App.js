import "./App.css";
import NavBar from "./Components/NavBar"
import { Route } from "react-router-dom"
import Home from "./Components/Home"

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Route exact path="/" component = {Home} />
      </main>
    </div>
  );
}

export default App;