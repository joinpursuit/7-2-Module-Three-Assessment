import {useState, useEffect} from "react"
import axios from "axios"

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [showLocations, setShowLocations] = useState(false)

    const fetchLocations = async () => {
        try {
            const res = await axios.get("https://ghibliapi.herokuapp.com/locations")
            setLocations(res.data)
        } catch (error) {
            console.log(error);
            setLocations([])
        }
    }

    const handleClick = () => {
        setShowLocations(prevShowLocations => !prevShowLocations)
    }

    useEffect(() => fetchLocations(), [])

    return (
        <main>
            <h1>List of Locations</h1>
            <button onClick={handleClick}>{showLocations ? "Hide Locations" : "Show Locations"}</button>
            {showLocations ? 
            <ul>
                {locations.map(location => {
                    return (
                    <li key={location.id}>
                        <h3>Name: {location.name}</h3>
                        <h3>Climate: {location.climate}</h3>
                    </li>
                    )
                })}
            </ul> :
            <ul></ul>   
        }
        </main>
    )
}

export default Locations