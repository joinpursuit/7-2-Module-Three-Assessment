import axios from "axios";
import { Component } from "react";

class Movies extends Component {
    state = {movie:[], selectedMovieTitle: "", selectedMovie: {} }
  
    fetchAllMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      this.setState({movie: res.data})
    } catch (error) {
        this.setState({movie: []})
    }
  };

  componentDidMount() {
      this.fetchAllMovies();
  }

  selectMovie = async (e) => {
      this.setState({selectedMovieTitle: e.target.value})
    try {
        const res = await axios.get(e.target.value);
        this.setState({selectedMovie: res.data})
      } catch (error) {
          this.setState({selectedMovie: {} })
      }
  }
  
  render() {
      const { movie, selectedMovieTitle, selectedMovie  } = this.state;
    return (
      <section>
        <h1>Select a Movie</h1>
        <select value={selectedMovieTitle} onChange={this.selectMovie}> 
            <option value="" selected ></option>
            {movie.map(filmObj => {
                return <option key={filmObj.title} value={filmObj.url} >{filmObj.title}</option>
            })}
        </select>
        
        <h1>{selectedMovie.title}</h1>
            
        <p>{selectedMovie.description}</p>
      </section>
    );
  }
}

export default Movies;
