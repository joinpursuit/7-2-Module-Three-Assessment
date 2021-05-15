import React, { Component } from "react";
import "../Styles/Movies.css";
import axios from "axios";

export default class Movies extends Component {
  state = {
    movies: [],
    selectedmovie: "",
    title: "",
    releaseDate: "",
    description: "",
  };

  loadMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      const movieData = res.data;
      this.setState({ movies: movieData });
    } catch (err) {
      console.log(err);
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.loadMovies();
  }

  handleChange = async (e) => {
    this.setState({ selectedMovie: e.target.value });
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${e.target.value}`
      );
      const title = res.data.title;
      const releaseDate = res.data.release_date;
      const description = res.data.description;
      this.setState({
        title: title,
        releaseDate: releaseDate,
        description: description,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { movies, selectedMovie, title, releaseDate, description } =
      this.state;
    return (
      <div>
        <h1>Select a Movie</h1>
        <select value={selectedMovie} onChange={this.handleChange}>
          <option value="" ></option>
          {movies.map((movieObj) => {
            return (
              <option value={movieObj.id} key={movieObj.title}>
                {movieObj.title}
              </option>
            );
          })}
        </select>
        <h4>Title: {title}</h4>
        <h4>Release Date: {releaseDate}</h4>
        <h4>Description: {description}</h4>
        {/* <MoviesSelector /> */}
      </div>
    );
  }
}
