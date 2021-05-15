import axios from "axios";
import React from "react";

class Locations extends React.Component {
  state = { locations: [], showLocation: false };

  componentDidMount() {
    this.fetchLocation();
  }

  fetchLocation = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/locations/");
      this.setState({ locations: res.data });
      debugger;
    } catch (error) {
      console.log(error);
      this.setState({ locations: {} });
    }
  };

  handleClick = () => {
    this.setState((pervState) => {
      return { showLocations: !pervState.showLocations };
    });
  };
  render() {
    const { locations, showLocations } = this.state;

    return (
      <section>
        <h1> List of Locations</h1>
        <button onClick={this.handleClick}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul>
            {locations.map((locationObj) => {
              return <li key={locationObj.name}>{locationObj.name}</li>;
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
