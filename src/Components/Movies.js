import axios from 'axios';
import React from 'react';

class Movies extends React.Component {

    state = { movies: [], selectedMovieURL: "", selectedMovie: {} }

    fetchGhibliMovies = async () => {
        try {
            const res = await axios.get("https://ghibliapi.herokuapp.com/films");
            this.setState({ movies: res.data })
        } catch (error) {
            this.setState({ movies: [] })
        }
    }

    componentDidMount = () => {
        this.fetchGhibliMovies();
    }

    selectMovie = async (e) => {
        this.setState({ selectedMovieURL: e.target.value})
        try {
            const res = await axios.get(e.target.value);
            this.setState({ selectedMovie: res.data});
        } catch (error) {
            this.setState({ selectedMovie: {} });
        }
    }

    render() {
        const { movies, selectedMovieURL, selectedMovie } = this.state;
        return(
        <div>
            <h1>Select a Movie</h1>
            <select onChange={this.selectMovie} value={selectedMovieURL}>
                <option defaultValue=""></option>
                {movies.map(movie => {
                    return <option value={movie.url} key={movie.id}>{movie.title}</option>
                })}
            </select>
            <h3>Title: {selectedMovie.title}</h3>
            <h3>Release Date: {selectedMovie.release_date}</h3>
            <h3>Description: {selectedMovie.description}</h3>
        </div>
        )
    }
}

export default Movies;