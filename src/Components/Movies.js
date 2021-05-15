import axios from "axios";
import React, { useEffect, useState } from "react";

import './Movies.css';

const Movies =()=>{
    const [movies,setMovies] = useState([]);
    const [selectedMovieID,setSelectedMovieID] = useState('');
    const [selectedMovie,setSelectedMovie] = useState({});
    const [hasSelected, setHasSelected] = useState(false);

    const fetchAllMovies = async () => {
        try {
            const res = await axios.get('https://ghibliapi.herokuapp.com/films')
            setMovies(res.data);
        } catch(err) {
            console.log(err);
            setMovies([])
        }
    }

    useEffect(()=>{
        fetchAllMovies()
    }, [])

    const selectMovie = async (e) => {
        setHasSelected(true);
        setSelectedMovieID(e.target.value); 
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`);
            setSelectedMovie(res.data)
        } catch(err) {
            setSelectedMovie({})
        }
    }

    let displayInfo;

    if(hasSelected) {
        displayInfo = (
            <div>
                <h1>Title: {selectedMovie.title}</h1>
                <p>Release Date: {selectedMovie?.release_date}</p>
                <p>Description: {selectedMovie.description}</p>
            </div>
        )
    } else {
        displayInfo = null
    }

    return (
        <section>
            <h1>Select a Movie</h1>
            <select value={selectedMovieID} onChange={selectMovie}>
                <option value ='' onChange={() => setHasSelected(false)}></option>
                {movies.map(moviesObj => {
                    return <option key={moviesObj.id} value={moviesObj.id}>{moviesObj.title}</option>
                })}
            </select>

            {displayInfo}
        </section>
    )
}

export default Movies;