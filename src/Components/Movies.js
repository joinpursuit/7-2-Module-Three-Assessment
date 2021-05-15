import axios from "axios";
import { Component } from "react";

class Movies extends Component {
state = { movies: [], selectedMovieUrl: "", selectedMovie: {}}

fetchAllMovies = async () => {
    try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        this.setState({ movies: res.data})
        debugger
    } catch (error) {
        console.log("error")
    }
};

componentDidMount(){
    this.fetchAllMovies();
};

selectedMovie = async (e) => {
    this.setState({ selectedMovieUrl: e.target.value})
    try {
        const res = await axios.get(e.target.value);
        this.setState({selectedMovie: res.data})
    } catch (error) {
        console.log("error")
    }
};

    render(){
        const {movies, selectedMovieUrl, selectedMovie} = this.state;
        return(
            <section>
                <h1>Select a Movie</h1>
                <select value={selectedMovieUrl} onChange={this.selectedMovie}>
                    <option value="" ></option>
                    {movies.map((film) => {
                        return (<option key={film.name} value={film.url}>{film.name}</option>)
                    })}
                </select>
                <p>{selectedMovie.title}</p>
                <p>{selectedMovie.release_date}</p>
                <p>{selectedMovie.description}</p>
            </section>
        )
    }
}

export default Movies;
