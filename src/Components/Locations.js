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

// ### `/locations`
// Displays a header, centered on the page, with the text "List of Locations".
// Display a button that toggles back and forth between "Show Locations" and "Hide Locations". When show locations has been selected, it
// displays an unordered list of all of the locations stored in the Ghibli API, centered on the page.
// Each location should include the name, climate, and terrain of that location. If the climate or the terrain are "TODO" in the API response, you should replace "TODO" with "Unknown".
// ![locations hidden](./assets/locations1.png)
// ![locations showing](./assets/locations2.png)
