// "https://ghibliapi.herokuapp.com/locations/"
import axios from "axios";
import { Component } from "react";

class Locations extends Component {
  state = { places: [], showLoca: false };

  fetchLocations = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/locations/");
      this.setState({ places: res.data.map((location) => {
          location = {name: location.name, climate: location.climate, terrain: location.terrain}
      }) });
        // debugger
    } catch (error) {
      this.setState({ places: [] });
    }
  };

  componentDidMount() {
    this.fetchLocations();
  }
 

  handleClick = (e) => {
    // this.setState((prevState) => {
    //   return { showLoca: !prevState.showLoca };
    // });
    this.setState({showLoca: !this.state.showLoca})
  };

  render() {
    const { places, showLoca } = this.state;
    const allLocations =  places.map((placesObj) => {
        // <li>
        <p style={{ color: "yellow" }}> Name: {placesObj.name} </p>
        {/* <p style={{ color: "yellow" }}> Climate: {placesObj.climate} </p> */}
        {/* <p style={{ color: "yellow" }}> Terrain: {placesObj.terrain} </p> */}
        // </li>
  })

    return (
      <section>
        <h1 style={{ color: "yellow" }}>List of Locations</h1>
        <button onClick={this.handleClick}>
        {showLoca ? "Hide Locations" : "Show Locations"}
        </button>
      
        <ul style={{ color: "yellow" }}>
           { showLoca ? allLocations : null}
        </ul>
       
       
      </section>
    );
  }
}
export default Locations;
{/* <h3>Name: {placesObj.name} </h3>,
              <p>Climate: {placesObj.climate} </p>,
              <p>Terrain: {placesObj.terrain} </p> */}
