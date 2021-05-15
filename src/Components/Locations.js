import axios from "axios";
import { useState } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState("Show Locations");

  const handleClick = async () => {
    if (show === "Show Locations") {
      try {
        const res = await axios.get(
          "https://ghibliapi.herokuapp.com/locations"
        );
        setLocations(res.data);
        setShow("Hide Locations");
      } catch (error) {
        setLocations([]);
      }
    } else {
        setLocations([]);
        setShow("Show Locations")
    }
  };

  return (
    <section id="List of Locations">
        <h1>List of Locations</h1>
      <button onClick={handleClick}>{show}</button>
      
      <ul>
        {locations.map((location) => {
          return (
            <li key={location.id}>
              Name: {location.name} <br />
              {/* if climate || terrain === TODO */}
              {/* replace with Unknown */}
              Climate: {location.climate}
              <br />
              Terrain: {location.terrain}
              <br />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Locations;
