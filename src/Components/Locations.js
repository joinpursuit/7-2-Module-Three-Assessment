import { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [displayLocations, setDisplayLocations] = useState(false);
  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/locations");
      setLocations(res.data);
    } catch (error) {
      setLocations([]);
    }
  };

  const handleClick = () => {
    setDisplayLocations((prevDisplayLocations) => !prevDisplayLocations);
  };
  return (
    <section>
      <h1>List of Locations</h1>
      <button onClick={handleClick}>
        {displayLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {displayLocations ? (
        <ul>
          {locations.map((locations) => (
            <li key={locations.id}>
              <h3> Name: {locations.name}</h3>
              <h3> Climate: {locations.climate}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <ul></ul>
      )}
    </section>
  );
};

export default Locations;
