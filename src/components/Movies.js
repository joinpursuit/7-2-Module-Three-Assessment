import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Movies = () => {
    const [movieList, setMovieList] = useState([])
    const [movie, setMovie] = useState({})


    const fetchGhibliMovies = async () => {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)
            setMovieList(res.data)
        } catch (error) {
            console.log(error);
            setMovieList([])
        }  
    }

    const updateMovie = async (e) => {
        setMovie(e.target.value);
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
            setMovie(res.data)
        } catch (error) {
            console.log(error)
            setMovie({})
        }
    }

    useEffect(() => {
        fetchGhibliMovies()
    })


    return (
        <div>
            <h1>Select a Movie</h1>
            <select value={movie.id} onChange={updateMovie}>
                <option defaultValue=""></option>
                {movieList.map(movie => {
                    return <option value={movie.id} key={movie.id}>{movie.title}</option>
                })}
            </select>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    )
}

export default Movies
