import { useState } from "react";
import axios from "axios";

const Location = () => {
  const [buttonName, setButtonName] = useState("Show Locations");
  const [locations, setLocations] = useState([]);
  const [locationsView, setLocationsView] = useState("locations-component-off");

  const toggleLocations = async () => {
    if (buttonName === "Show Locations") {
      try {
        const res = await axios.get(
          "https://ghibliapi.herokuapp.com/locations"
        );
        setLocations(res.data);
        setButtonName("Hide Locations");
        setLocationsView("locations-component-on");
      } catch (error) {
        console.log(error);
      }
    } else {
      setLocations("");
      setButtonName("Show Locations");
      setLocationsView("locations-component-off");
    }
  };

  const replaceToDos = (string) => {
    if (string === "TODO") {
      return "Unknown";
    } else {
      return string;
    }
  };
  return (
    <div className={locationsView}>
      <h1>List of Locations</h1>
      <button onClick={toggleLocations}>{buttonName}</button>
      <section>
        <ul>
          {locations
            ? locations.map((location) => {
                return (
                  <li key={location.id}>
                    <div className="location-name">Name: {location.name}</div>
                    <div className="location-climate">
                      Climate: {replaceToDos(location.climate)}
                    </div>
                    <div className="location-terrain">
                      {" "}
                      Terrain: {replaceToDos(location.terrain)}
                    </div>
                    <br />
                  </li>
                );
              })
            : ""}
        </ul>
      </section>
    </div>
  );
};

export default Location;
