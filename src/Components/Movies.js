import axios from "axios";
import { Component } from "react";

class Movies extends Component {
  state = {
    movies: [],
    title: "",
    releaseDate: "",
    description: "",
  };

  fetchFilms = async () => {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    this.setState({ movies: res.data });
  };

  handleChange = async (e) => {
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${e.target.value}`
      );
      this.setState({
        title: res.data.title,
        releaseDate: res.data.release_date,
        description: res.data.description,
      });
    } catch (error) {
      this.setState({
        title: "",
        releaseDate: "",
        description: "",
      });
    }
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { movies, title, releaseDate, description } = this.state;
    console.log(this.state)
    return (
      <div>
        <h1>Select a Movie</h1>
        <select onChange={this.handleChange}>
          <option value=""></option>
          {movies.map((movie) => {
            return (
              <option value={movie.id} key={movie.id}>{movie.title}</option>
            );
          })}
        </select>
       
          <section>
          <h1>Title:{title}</h1>
          <h3>Release Date: {releaseDate}</h3>
          <p>Description: {description}</p>
        </section>
        
      </div>
    );
  }
}
export default Movies;
