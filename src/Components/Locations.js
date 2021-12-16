import React, { Component } from "react";
import axios from "axios";

export default class Locations extends Component {
  state = { locations: [], showLocations: false };

  loadLocations = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/locations");
      const locationsData = res.data;
      this.setState({ locations: locationsData });
    } catch (err) {
      console.log(err);
      this.setState({ locations: [] });
    }
  };

  componentDidMount() {
    this.loadLocations();
  }

  showHide = (e) => {
    this.setState((prevState) => {
      return { showLocations: !prevState.showLocations };
    });
  };

  render() {
    const { locations, showLocations } = this.state;
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.showHide}>
          {showLocations ? "Hide Locations" : "Show Locations"}{" "}
        </button>
        <ul></ul>
        {showLocations && (
          <ul>
            {locations.map((locationObj) => {
              if (locationObj.climate === "TODO") {
                locationObj.climate = "unknown";
              }
              if (locationObj.terrain === "TODO") {
                locationObj.terrain = "unknown";
              }
              return (
                <li>
                  <br></br>
                  {locationObj.name}
                  <br></br>
                  {locationObj.climate}
                  <br></br>
                  {locationObj.terrain}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
