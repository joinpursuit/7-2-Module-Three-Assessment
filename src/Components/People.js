import axios from "axios";
import React from "react";

class People extends React.Component {
  state = { people: [], input: "", searched: false };

  fetchPerson = async () => {
    try {
      const {input } = this.state
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people/${input}`);
      debugger;
      this.setState({ people: res.data });
    } catch (error) {
      this.setState({ people: [] });
    }
  };

  componentDidMount() {
    this.fetchPerson();
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ searched: true })
  };

  render() {
    const { input, people, searched } = this.state;

    let personsDeeets;

    if (searched) {
      if (people.name) {
        personsDeeets = (
          <div>
            <p>Name: {people.name}</p>
            <p>Age: {people.age}</p>
            <p>Gender: {people.gender}</p>
          </div>
        );
      } else {
        personsDeeets = <div>Not Found</div>;
      }
    }
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
        {/* {people.map((person) => {
          return (
            <div>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
              <p>Gender: {person.gender}</p>
            </div>
          );
        })} */}
        {personsDeeets}
      </section>
    );
  }
}

export default People;
