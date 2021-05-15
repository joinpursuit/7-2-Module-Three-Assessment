import axios from "axios";
import { Component } from "react";

class Locations extends Component {
  state = { toggle: true, locations: [] };

  fetchLocations = async () => {
    const res = await axios.get("https://ghibliapi.herokuapp.com/locations");
    this.setState({ locations: res.data });
    // debugger
  };

  componentDidMount() {
    this.fetchLocations();
  }

  toggle = () => {
    this.setState((prevState) => {
      return { toggle: !prevState.toggle };
    });
  };
  render() {
    const { toggle, locations } = this.state;
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.toggle}>
          {toggle ? "Show Locations" : "Hide Locations"}
        </button>
        {toggle ? <ul></ul> : 
        <section>
            {locations.map(location=>{
                if((location.climate || location.terrain) === "TODO" ){
                    return <ul><li>{location.name} Unknown Unknown</li></ul>
                }else{
                return <ul>
                    <li>{location.name} {location.climate} {location.terrain}</li>
                    </ul>
                }
            })}
        </section>}
      </div>
    );
  }
}

export default Locations;
