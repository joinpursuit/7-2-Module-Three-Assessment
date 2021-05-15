import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
	// declare useState
	const [movies, setMovies] = useState([]);

	// function to call the API
	const fetchMovies = async () => {
		try {
			const res = await axios.get("https://ghibliapi.herokuapp.com/films");

			setMovies(res.data);
		} catch (err) {
			setMovies([]);
		}
	};

	// call the function for the API
	useEffect(() => {
		fetchMovies();
	}, []);
	// get the option selected
	return (
		<section>
			<h1>Select a Movie</h1>

			<select>
				<option value=""></option>
				{/* map the movies array */}
				{movies.map((movie) => {
					return (
						<option key={movie.id} value={movie.url}>
							{movie.title}
						</option>
					);
				})}
			</select>
		</section>
	);
};

export default Movies;
