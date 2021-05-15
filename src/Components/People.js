import React, { Component } from "react";
import axios from "axios";

class People extends Component {
  state = { people: [], input: "", inputPerson: {}, searched: false };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  fetchAllPeople = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people`);
      this.setState({ people: res.data });
    } catch (error) {
      this.setState({ people: [] });
    }
  };

  componentDidMount = () => {
    this.fetchAllPeople();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { people, input } = this.state;
    people.forEach((person) => {
      if (input === person.name) {
        this.setState({ inputPerson: person });
      }
    });
    this.setState({ input: "", searched: true});
  };

  render() {
    const { input, inputPerson, searched } = this.state;

    let text;
    if(searched) {
        if(inputPerson.name) {
            text = (
                <div>
                <h3>Name: {inputPerson.name}</h3>
                <h3>Age: {inputPerson.age}</h3>
                <h3>Gender: {inputPerson.gender}</h3>
              </div>
            );
        } else {
            text = <div>Not Found</div>
        } 
    } else {
        text = null
    }

    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find Your Person"
            value={input}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {text}
      </div>
    );
  }
}

export default People;
