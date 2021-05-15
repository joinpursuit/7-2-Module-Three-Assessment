import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [selectedMovieId, setSelectedMovieId] = useState({})
    const [aMovie, setAMovie] = useState({})

    useEffect(() => {
        fetchAllMovies()
    }, [])
    const fetchAllMovies = async () => {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)
            setMovies(res.data)
        } catch (error) {
            setMovies([])
        }
    }
    const fetchMovie = async (e) => {

        e.preventDefault()
        setSelectedMovieId(e.target.value)
        const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
        setAMovie(res.data)
    }

    return (
        <div>
            <h1>Select a Movie</h1>
            <select value={selectedMovieId} onChange={fetchMovie}>
                <option defaultValue=""></option>
                {movies.map(movie => {
                    return (
                        <option value={movie.id} key={movie.title}>{movie.title}</option>
                    )
                })}
            </select>
            <h2>{aMovie.title}</h2>
            <h2>{aMovie.release_date}</h2>
            <h2>{aMovie.description}</h2>
        </div>
    )
}