import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const fetchLocations = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/locations`);
      setLocations(res.data);
      debugger;
    } catch (error) {
      console.log(error);
      setLocations([]);
    }
  };

  const handleClick = (e) => {
    setShowLocations((prevShowLocations) => !prevShowLocations);
  };

  useEffect(() => {
    fetchLocations();
  });

  return (
    <section>
      <h1>List of Locations</h1>
      <button onClick={handleClick}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations ? (
        <ul>
          {locations.map((locationObj) => {
            return (
              <li key={locationObj.id}>
                {locationObj.name} {locationObj.climate} {locationObj.terrain}
              </li>
            );
          })}
        </ul>
      ) : (
      <ul></ul>)}
    </section>
  );
};

export default Locations;
