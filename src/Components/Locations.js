import axios from "axios";
import { Component } from "react";

class Locations extends Component {
  state = { locations: [], showLocations: false };

  componentDidMount() {
      this.fetchLocations()
  }

  fetchLocations = async () => {
      try {
        const res = await axios.get(`https://ghibliapi.herokuapp.com/locations`)
        this.setState({locations: res.data})
      } catch (error) {
          console.log(error)
          this.setState({locations: []})
      }
  }

  handleClick = () => {
      this.setState((prevState) => {
          return { showLocations: !prevState.showLocations}
      })
  }
  render() {
    const { locations, showLocations } = this.state;
    return (
      <sectiion>
        <h1> List of Locations</h1>
        <button onClick={this.handleClick}>{showLocations ? "Hide Locations" : "Show Locations"}</button>
        {showLocations ? (
            <ul>
                {locations.map((location) => 
                     <li key={location.id}>{location.name}</li>)}
            </ul>) : <ul></ul>
            
        }
            

      </sectiion>
    );
  }
}

export default Locations;
