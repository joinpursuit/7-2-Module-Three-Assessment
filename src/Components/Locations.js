import { useState, useEffect } from "react";
import axios from "axios";
import "./locations.css";


const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const {data} = await axios.get("https://ghibliapi.herokuapp.com/locations");
      setLocations(data);
    } catch (err) {
      setLocations([]);
    }
  };

  const handleClick = () =>
    setShowLocations((prevShowLocations) => !prevShowLocations);

  return (
    <section className="locationSection">
      <h1>List of Locations</h1>

      <button onClick={handleClick}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations ? 
      ( <ul> {locations.map(l=>  <li key={l.name}>{l.name}</li> )} </ul>)
      : (<ul></ul> )}
    </section>
  );
};

export default Locations;
