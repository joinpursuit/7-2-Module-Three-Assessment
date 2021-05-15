import axios from "axios";
import { useState, useEffect } from "react";

const Locations = () => {
	// declare the state
	const [locations, setLocations] = useState([]);
	const [showLocations, setShowLocations] = useState(false);

	// call the API with a function
	const fetchLocations = async () => {
		try {
			const res = await axios.get("https://ghibliapi.herokuapp.com/locations");
			setLocations(res.data);
		} catch (err) {
			setLocations([]);
		}
	};

	// call the API function on cdm
	useEffect(() => {
		fetchLocations();
	}, []);

	// toggle button
	const handleClick = () => {
		setShowLocations((prevShowLocations) => !prevShowLocations);
	};

	return (
		<section>
			<h1>List of Locations</h1>
			<button onClick={handleClick}>
				{showLocations ? "Hide Locations" : "Show Locations"}
			</button>

			{/* connect button to list */}
			{showLocations ? (
				// map locations
				<ul>
					{locations.map((location) => {
						// {location.climate} === "TODO"? "Unknown":{location.climate}
						// {location.terrain} === "TODO"? "Unknown":{location.terrain}
						return (
							<li key={location.id}>
								<p>Name: {location.name}</p>
								<p>Climate: {location.climate}</p>
								<p>Terrain: {location.terrain}</p>
							</li>
						);
					})}
				</ul>
			) : (
				<ul></ul>
			)}
		</section>
	);
};

export default Locations;
