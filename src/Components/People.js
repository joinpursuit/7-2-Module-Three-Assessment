import axios from "axios";
import React from "react";

class People extends React.Component {
  state = { input: "", people: [], person: {} };

  fetchPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people/");
      // debugger;
      this.setState({ people: res.data });
      // debugger;
    } catch (error) {
      this.setState({ people: [] });
    }
  };

  componentDidMount() {
    this.fetchPeople();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input, people } = this.state;
    for (const person of people) {
      if (input === person.name) {
        this.setState({ person, input: "" });
        return 
      }
    }
    this.setState({ person: {}, input: "" })
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, person } = this.state;

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
        {person.name ? (
          <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
          </div>
        ) : (
          <div>Not Found</div>
        )}
        
      </section>
    );
  }
}

export default People;
