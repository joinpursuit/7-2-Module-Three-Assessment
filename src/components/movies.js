import React from "react";
import Axios from "axios";
import "./movies.css";

class Movies extends React.Component {
state = {movies: [], selectedMovURL: "", selectedMov: {}}

  async componentDidMount() {
    try {
     const res = await Axios.get("https://ghibliapi.herokuapp.com/films");
     this.setState({movies: res.data })
    } catch (err) {
        this.setState({movies: []})
    }
  }

  handleChange = async (e) => {
      this.setState({ selectedMovURL: e.target.value})
    try {
        const res = await Axios.get(e.target.value);
        this.setState({selectedMov: res.data })
       } catch (err) {
           this.setState({ selectedMov: {} })
       }
  }

  render() {
      const { movies, selectedMovURL, selectedMov } = this.state
    return (
      <main className="movieContainer">
        <h1>Select a Movie</h1>
        <select defaultValue={selectedMovURL} onChange={this.handleChange}>
            <option defaultValue=''  disable='true'></option>
            {movies.map(movObj => {
                return <option key={movObj.id} value={movObj.url}>{movObj.title}</option>
            })}
        </select>
        <h2>{selectedMov.title}</h2>

        <p> {selectedMov.release_date}</p>

        <p> {selectedMov.description}</p>

      </main>
    );
  }
}

export default Movies;
