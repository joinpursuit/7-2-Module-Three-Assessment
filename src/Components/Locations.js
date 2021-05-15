import { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/locations`);
      setLocations(res.data);
    } catch (err) {
      setLocations([]);
    }
  };

  const handleClick = () =>
    setShowLocations((prevShowLocations) => !prevShowLocations);

  const createLi = locations.map((locationObj) => {
        let climate = locationObj.climate;
        let terrain = locationObj.terrain;
        if(climate === 'TODO'){
            climate = 'Unknown'
        }
        if(terrain === 'TODO') {
            terrain = 'Unknown'
        }
        return (
            <li key={locationObj.id}>
                <p>Name: {locationObj.name}</p>
                <p>Climate: {climate}</p>
                <p>Terrain: {terrain}</p>
            </li>);
        })
  return (
    <section>
      <h1>List of Locations</h1>

      <button onClick={handleClick}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations ? (
        <ul>
          {createLi}
        </ul>
      ) : (
        <ul></ul>
      )}
    </section>
  );
};

export default Locations;