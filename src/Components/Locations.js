import axios from "axios";
import React from "react";

class Locations extends React.Component {
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
                <div key={location.name}>
                  <li>Name: {location.name}</li>
                  <p>Climate: {location.climate}</p>
                  <p>Terrain: {location.terrain}</p>
                </div>
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
