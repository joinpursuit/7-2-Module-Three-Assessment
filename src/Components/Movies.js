import axios from 'axios';
import { Component } from 'react';
import "./NavBar.css"

class Movies extends Component {
    state = { movies: [], movieName: "", movie: {} }

    getAllMovies = async () => {
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films`)
            this.setState({movies: res.data})
        } catch (error) {
            this.setState({movies: []})
        }
    }
    
    componentDidMount() {
        this.getAllMovies()
    }
    
    selectMovie = async(e) =>{
        this.setState({movieName: e.target.value})
        try {
            const res = await axios.get(e.target.value)
            this.setState({movie: res.data})
        } catch (error) {
            this.setState({movie: {}})
        }
    }

    render() {
        const {movies, movieName, movie} = this.state
        return (
            <section className="movies">
                <h1>Select a Movie</h1>
                <select value={movieName} onChange={this.selectMovie}>
                    <option defaultValue=""></option>
                    {movies.map(movieName=>{
                        return (
                            <option value={movieName.url} key={movieName.id}>
                                {movieName.title}
                            </option>
                        )
                    })}
                </select>
                
                    <h2>Title: {movie.title}</h2>
                    <h2>Release Date: {movie.release_date}</h2>
                    <h2>Description: {movie.description}</h2>

            </section>
        );
    }
}

export default Movies;