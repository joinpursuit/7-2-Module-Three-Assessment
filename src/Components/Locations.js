import {useState, useEffect} from "react"
import axios from "axios"


const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [showLocations, setShowLocations] = useState(false)
  
    const fetchLocations = async () => {
      try {
          const res = await axios.get("https://ghibliapi.herokuapp.com/locations")
          setLocations(res.data)
      } catch (error) {
          setLocations([])
      }
    };
    
    const handleClick = () => {
      setShowLocations(prevShowLocations => !prevShowLocations)}
    
    useEffect(() => {
      fetchLocations()
    }, [])
  
    return (
      <section className="LocationsContainer">
        <h1>List of Locations</h1>
        <button onClick={handleClick}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul>
            {locations.map((location) => {
                if(location.terrain  === "TODO" && location.climate === "TODO") {
                    location.terrain = "Unknown"
                    location.climate = "Unknown"
                }
              return <li key={location.id}>Name: {location.name} <br/> Climate: {location.climate}  <br/> Terrain: {location.terrain}</li>;
            })}
          </ul>
        ): <ul></ul>}
      </section>
    );
  };


export default Locations;