import axios from "axios";
import React, { Component } from "react";

export default class People extends Component {
  state = { people: [], input: "", name: "", age: "", gender: "" };

  getPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people");
      const peopleData = res.data;
      this.setState({ people: peopleData });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.getPeople();
  };

  nameChecker = () => {
    const { people, input } = this.state;
    for (let i = 0; i < people.length; i++) {
      if (input.toLowerCase() === people[i].name.toLowerCase()) {
        return this.setState({
          name: people[i].name,
          age: people[i].age,
          gender: people[i].gender,
        });
      } else return console.log("Invalid Input");
    }
  };

  handleSubmit = (e) => {
    const { people } = this.state;
    e.preventDefault();
    people.filter(this.nameChecker);
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, name, age, gender } = this.state;
    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find Your Person"
            value={input}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Gender: {gender}</h4>
        <h4></h4>
      </div>
    );
  }
}
