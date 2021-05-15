import { Component } from "react";
import axios from "axios";

class Movies extends Component {
    state = { movies: [], selectedMovieUrl: "", selectedMovie: {} }

  fetchAllMovies = async () =>  {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
      this.setState({movies: res.data})
    } catch (error) {
        this.setState({movies: []})
        
    }
  }

  componentDidMount() {
      this.fetchAllMovies();
  }


  selectMovies = async (e) => {
      this.setState({selectedMovieUrl: e.target.value})
      try {
          const res = await axios.get(e.target.value);
          this.setState({ selectedMovie: res.data})
      } catch (error) {
          this.setState({ selectedMovie: []})
      }
      
  }

  render() {
      const {movies, selectedMovieUrl, selectedMovie } = this.state;
    return (
      <section>
          <h1> Select a Movie</h1>
        <select value={selectedMovieUrl} onChange={this.selectMovies}>
            <option value=""></option>
            {movies.map((movieObj) => {
                return <option key={movieObj.title} value={movieObj.url}>{movieObj.title}</option>
            })}
        </select>
        <h1>
        {selectedMovie.title}

        </h1>
        <h1>
        Release Date: {selectedMovie.release_date}
        </h1>
        <h1>
        Description: {selectedMovie.description}

        </h1>

      </section>
    );
  }
}

export default Movies;
