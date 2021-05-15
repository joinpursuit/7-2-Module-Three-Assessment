import { Component } from "react";
import axios from "axios";

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
      this.setState({ selectedFilmObj: res.data });
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
              <option value={film.id} key={film.title}>
                {film.title}
              </option>
            );
          })}
        </select>
        {selectedFilmObj.id ? (
          <div>
            <p>Title: {selectedFilmObj.title}</p>
            <p>Release Date: {selectedFilmObj.release_date}</p>
            <p>Description: {selectedFilmObj.description}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Movies;

// Displays the header "Select a Movie" above a dropdown menu, in the upper ~400px of the page, centered.
// The dropdown menu should display a list of the titles of each movie in the database. The first item in the dropdown menu should be blank.
// When a movie is chosen from the dropdown menu, the title, release date, and description of that movie should display below it.
// In this route, there should be no "Submit" button. Selection from the dropdown menu should submit the user's input automatically.
// New inputs should replace the previously displayed information. When 'blank' is selected the movie info should clear off the screen.
// ![Before Select](./assets/movieSelect1.png)
// ![After Select](./assets/movieSelect2.png)
