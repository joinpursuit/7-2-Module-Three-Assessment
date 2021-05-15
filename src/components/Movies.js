import {useState, useEffect} from "react"
import axios from "axios"

const Movies = () => {
    const [title, setTitle] = useState("")
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})

    const fetchMovies = async () => {
        try {
            const res = await axios.get("https://ghibliapi.herokuapp.com/films")
            setMovies(res.data)
        } catch (error) {
            console.log(error);
            setMovies([])
        }
    }

    const handleChange = async (e) => {
        const {value} = e.target
        setTitle(value)
        try {
            const res = await axios.get(value)
            setMovie(res.data)
        } catch (error) {
            console.log(error);
            setMovie({})
        }
    }

    useEffect(() => fetchMovies(), [])

    return (
        <main>
            <h1>Select a Movie</h1>
            <select value={title} onChange={handleChange}>
                <option value=""></option>
                {movies.map(movie => {
                    return <option value={movie.url} key={movie.id}>{movie.title}</option>
                })}
            </select>
            {title ?
            <div>
                <h3>Title: {movie.title}</h3>
                <h3>Release Date: {movie.release_date}</h3>
                <h3>Description: {movie.description}</h3>  
            </div>
            : <div></div> 
        }
        </main>
    )
}

export default Movies