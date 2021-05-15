import React from "react";
import Axios from "axios";
import './people.css'



class People extends React.Component {
  state = { input: "", person: {}, hasSearched: false };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ hasSearched: true });
    try {
      const res = await Axios.get(
        `https://ghibliapi.herokuapp.com/people?name=${this.state.input}`
      );
      this.setState({ person: res.data[0] });
    } catch (err) {
      this.setState({ person: {} });
    }

    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, person, hasSearched, } = this.state;

    let text;
    if (hasSearched) {
      if (person && person.name) {
        text = (
          <section className='personContainer'>
            <h1>Name: {person.name}</h1>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
          </section>
        );
      } else {
        text = <h1>Not Found</h1>;
      }
    } else {
      text = null;
    }

    return (
      <section className="pplContainer">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Find Your Person"
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">
            Search
          </button>
        </form>
        {text}
      </section>
    );
  }
}

export default People;
