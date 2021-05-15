import axios from "axios";
import React from "react";

class Movies extends React.Component {
  state = { movies: [], moviePicked: "", movieDeets: {} };

  seeMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    //   debugger;
      this.setState({ movies: res.data });
    } catch (error) {
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.seeMovies();
  }

  pickAMovie = async (e) => {
      this.setState({ moviePicked: e.target.value })
      try {
          const res = await axios.get("https://ghibliapi.herokuapp.com/films")
          this.setState({ movieDeets: res.data })
      } catch (error) {
          this.setState({ movieDeets: {} })
      }
  }

  render() {
      const { movies, moviePicked, movieDeets } = this.state
    return (
      <section>
        <h1>Select a Movie</h1>
        <select value={moviePicked} onChange={this.pickAMovie}>
          <option value="" defaultValue></option>
          {movies.map((movie) => {
              return <option>{movie.title}</option>
          })}
        </select>
        {movieDeets.map((movieDeet) => {
            return (
                <div>
        <h1>{movieDeets.title}</h1>
        <p>{movieDeets.release_date}</p>
        <p>{movieDeets.description}</p>
        </div>
            )
        })}
      </section>
    );
  }
}

export default Movies;
