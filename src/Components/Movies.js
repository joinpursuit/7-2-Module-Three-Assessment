import axios from "axios";
import { Component } from "react";

class Movies extends Component {
  state = { titles: [], title: "", releaseDate: "", description: "" };

  componentDidMount() {
    this.fetchTitle();
  }

  fetchTitle = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      const ghibliMovies = res.data;
      this.setState({ titles: ghibliMovies });
    } catch (error) {
      console.log(error);
      this.setState({ titles: [] });
    }
  };

  handleSelect = async (e) => {
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${e.target.value}`
      );
      const ghibliTile = res.data.title;
      const ghibliRelease = res.data.release_date;
      const ghibliDescription = res.data.description;
      this.setState({
        title: ghibliTile,
        releaseDate: ghibliRelease,
        description: ghibliDescription,
      });
    } catch (error) {
      console.log(error);
      this.setState({});
    }
  };

  render() {
    const { titles, title, releaseDate, description } = this.state;
    return (
      <section>
        <h1>Select a Movie</h1>
        <select onChange={this.handleSelect}>
          <option value=""></option>
          {titles.map((movie) => (
            <option value={movie.id} key={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
        <h1>Title: {title}</h1>
        <p>Release Date: {releaseDate}</p>
        <p>Description: {description}</p>
      </section>
    );
  }
}

export default Movies;
