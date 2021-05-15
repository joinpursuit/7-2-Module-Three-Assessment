import axios from "axios";
import { useState, useEffect } from "react";
import "./locations.css"

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const fetchLocations = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/locations`);
    
      setLocations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLocations = () => {
    if (showLocations) {
      setShowLocations(false);
    } else {
      setShowLocations(true);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="locations">
      <h1>List of Locations</h1>

      {showLocations === false && <button onClick={toggleLocations}>Show Locations</button>}
      {showLocations === true && <button onClick={toggleLocations}>Hide Locations</button>}
      <ul>
      {showLocations === true && locations.map((location) => {
          return <li>
              <p>Name: {location.name}</p>
              <p>Climate: {location.climate}</p>
              <p>Terrain: {location.terrain}</p>
          </li>
      })}
      </ul>
    </div>
  );
};

export default Locations