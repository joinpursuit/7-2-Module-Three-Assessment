import React, { Component } from "react";
import axios from "axios";

export default class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      toggle: false,
    };
  }

  getLocations = async () => {
    const { data } = await axios.get("https://ghibliapi.herokuapp.com/locations/");

    this.setState({ locations: data });
  };
  componentDidMount() {
    this.getLocations();
  }
  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    const { locations, toggle } = this.state;
    const listItems = locations.map((location, i) => (
      <div>
        <li key={i}>
          Name: {location.name}
          <br />
          Climate: {location.climate}
          <br />
          Terrain: {location.terrain}
        </li>
      </div>
    ));
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>{toggle ? "Hide Locations" : "Show Locations"}</button>

        <ul>{toggle ? listItems : null}</ul>
      </div>
    );
  }
}
