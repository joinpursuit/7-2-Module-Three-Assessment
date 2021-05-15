import Axios from "axios";
import React from "react";
import "./locations.css";


class Locations extends React.Component {
  state = { showLocations: false, locations: [] };

  async componentDidMount() {
    try {
      const res = await Axios.get("https://ghibliapi.herokuapp.com/locations");
      this.setState({ locations: res.data });
    } catch (err) {}
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return { showLocations: !prevState.showLocations };
    });
  };

  render() {
    return (
      <section className='locationsContainer'>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {this.state.showLocations ? "Hide Locations" : "Show Locations"}{" "}
        </button>
        {this.state.showLocations ? (
          <ul>
            {this.state.locations.map((locationObj) => {
              return (
                <li key={locationObj.name}>
                  <p>Name: {locationObj.name}</p>
                  <p>Climate: {locationObj.climate}</p>
                  <p> Terrain: {locationObj.terrain}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul></ul>
        )}
      </section>
    );
  }
}

export default Locations;
