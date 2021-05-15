import React, { Component } from "react";
import axios from "axios";

class Locations extends Component {
  state = { locations: [], showLocations: false };

  fetchLocations = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/locations");
      this.setState({ locations: res.data });
    } catch (error) {
      this.setState({ locations: [] });
    }
  };

  componentDidMount() {
    this.fetchLocations();
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return { showLocations: !prevState.showLocations };
    });
  };

  render() {
    const { locations, showLocations } = this.state;
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul>
            {locations.map((location) => {
              return (
                <li key={location.id}>
                  <p>Name: {location.name}</p>
                  <p>Climate: {location.climate}</p>
                  <p>Terrain: {location.terrain}</p>
                </li>
              );
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
