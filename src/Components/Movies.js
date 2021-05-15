import { Component } from "react";
import axios from "axios";

import "./Movies.css"

class Movies extends Component {
  state = { filmsArray: [], selectedFilmId: "", selectedFilmObj: {} };

  fetchMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
      this.setState({ filmsArray: res.data });
    } catch (error) {
      this.setState({ filmsArray: [] });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  movieSelected = async (e) => {
    try {
      const selectedFilmId = e.target.value;
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${selectedFilmId}`
      );
      //   debugger
      this.setState({
        selectedFilmObj: res.data,
        selectedFilm: res.data.title,
      });
    } catch (error) {
      this.setState({ selectedFilmObj: {} });
    }
  };

  render() {
    const { filmsArray, selectedFilmObj } = this.state;
    return (
      <div>
        <h1>Select a Movie</h1>
        <select onChange={this.movieSelected}>
          <option></option>
          {filmsArray.map((film) => {
            return (
              <option value={film.id} key={film.title} className="movieOptions">
                {film.title}
              </option>
            );
          })}
        </select>
        {/* {selectedFilmObj.id ? (
         <> */}
        <div >
          <h1>Title: {selectedFilmObj.title}</h1>
          <p>Release Date: {selectedFilmObj.release_date}</p>
          <p className="movieInfo">Description: {selectedFilmObj.description}</p>
        </div>
        {/* </>
        ) : null} */}
      </div>
    );
  }
}

export default Movies;
