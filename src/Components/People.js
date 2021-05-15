import axios from "axios";
import React from "react";

class People extends React.Component {
  state = { input: "", people: {}, hasSearched: false };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ hasSearched: true });
    try {
      const { input } = this.state;
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/people/?name=${input}`
      );
      this.setState({ people: res.data[0] });
      debugger;
    } catch (error) {
      console.log(error);
      this.setState({ people: {} });
    }
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, people, hasSearched } = this.state;
    let search;
    if (hasSearched) {
      if (people?.name) {
        search = (
          <div>
            <p>Name: {people.name}</p>
            <p>Age: {people.age}</p>
            <p>Gender: {people.gender}</p>
          </div>
        );
      } else {
        search = (
          <div>
            <p>Not Found</p>
          </div>
        );
      }
    } else {
      search = null;
    }
    return (
      <section>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Find Your Person"
          ></input>
          <button type="submit">Submit</button>
        </form>
        {search}
      </section>
    );
  }
}

export default People;
