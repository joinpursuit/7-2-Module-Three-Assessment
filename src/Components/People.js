import axios from "axios";
import { Component } from "react";
import "./NavBar.css";

class People extends Component {
  state = { input: "", person: {}, searched: false };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ searched: true });
    try {
      const { input } = this.state;
      let inputCap =
        input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/people?name=${inputCap}`
      );

      this.setState({ person: res.data[0] });
    } catch (error) {
      this.setState({ person: {} });
    }
    this.setState({ input: "" });
  };

  render() {
    const { input, person, searched } = this.state;
    let text;
    if (searched) {
      if (person && person.name) {
        text = (
          <div>
            <h1>Name: {person.name}</h1>
            <h1>Age: {person.age}</h1>
            <h1>Gender: {person.gender}</h1>
          </div>
        );
      } else {
        text = <p>Not Found</p>;
      }
    } else {
      text = null;
    }
    return (
      <section className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Find Your Person"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {text}
      </section>
    );
  }
}

export default People;
