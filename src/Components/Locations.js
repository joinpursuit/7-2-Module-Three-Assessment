import { Component } from "react";
import axios from "axios";

import "./Locations.css"

class Locations extends Component {
  state = { locationsArray: [], showLocations: false };

  fetchLocations = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/locations");
      this.setState({ locationsArray: res.data });
    } catch (error) {
      this.setState({ locationsArray: [] });
    }
  };

  componentDidMount() {
    this.fetchLocations();
  }

  buttonClick = () => {
    this.setState((prevState) => {
      return { showLocations: !prevState.showLocations };
    });
  };

  render() {
    const { locationsArray, showLocations } = this.state;

    return (
      <div>
        {" "}
        <h1>List of Locations</h1>
        <button onClick={this.buttonClick} className="locationsButton">
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul className="locationsList">
            {locationsArray.map((location) => {
              return <li>
                <p>Name: {location.name}</p>
                <p>Climate: {location.climate === "TODO" ? "Unknown" : location.climate}</p>
                <p>Terrain: {location.terrain === "TODO" ? "Unknown" : location.terrain}</p>
              </li>
            })}
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    );
  }
}

export default Locations;

