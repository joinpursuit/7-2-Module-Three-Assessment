import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
	// declare useState
	const [movies, setMovies] = useState([]);
	const [selectedMovieURL, setSelectedMovieURL] = useState("");
	const [selectedMovie, setSelectedMovie] = useState({});
	// const [hasSelected, setHasSelected] = useState(false);
	let movieDetails;

	// function to call the API
	const fetchMovies = async () => {
		// setHasSelected(true);
		try {
			const res = await axios.get("https://ghibliapi.herokuapp.com/films");

			setMovies(res.data);
		} catch (err) {
			setMovies([]);
		}
	};

	// call the API function on cdm
	useEffect(() => {
		fetchMovies();
	}, []);

	// get the option selected ... base for movie details
	const selectMovie = async (e) => {
		setSelectedMovieURL(e.target.value);
		if (e.target.value) {
			try {
				const res = await axios.get(e.target.value);
				setSelectedMovie(res.data);
			} catch (err) {
				setSelectedMovie({});
			}
		}
		if (e.target.value === "") {
			setSelectedMovie({});
		}
	};

	movieDetails = (
		<div>
			{/* access movie details object */}
			<h1>Title: {selectedMovie.title}</h1>
			<p>Release Date: {selectedMovie.release_date}</p>
			<p>Description: {selectedMovie.description}</p>
		</div>
	);

	return (
		<section>
			<h1>Select a Movie</h1>
			{/* pass movie selected to a function to get movie details */}
			<select value={selectedMovieURL} onChange={selectMovie}>
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
			{movieDetails}
		</section>
	);
};

export default Movies;
