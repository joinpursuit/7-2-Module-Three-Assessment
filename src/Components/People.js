import axios from "axios";
import React from "react";

class People extends React.Component {
  state = { input: "", people: [] };

  fetchPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people/");
      debugger;
      this.setState({ people: res.data });
      debugger;
    } catch (error) {
      this.setState({ people: [] });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchPeople();
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, people } = this.state;

    const getPersonsDeets = (people) => {
      let deets = [];
      for (let i = 0; i < people.length; i++) {
        const person = people[i];
        deets.push(
          <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
          </div>
        );
      }
      return deets;
    };

    return (
      <section>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Find Your Person"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {people.name ? (
          <div>
            <p>Name: {people.name}</p>
            <p>Age: {people.age}</p>
            <p>Gender: {people.gender}</p>
          </div>
        ) : (
          <div>Not Found</div>
        )}
        <ul>{getPersonsDeets(people)}</ul>
      </section>
    );
  }
}

export default People;
