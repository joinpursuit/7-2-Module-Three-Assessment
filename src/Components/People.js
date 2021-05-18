import axios from "axios";
import React, { Component } from "react";

export default class People extends Component {
  state = { people: [], input: "", person: {}, ifSearched: false };

  getPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people");
      const peopleData = res.data;
      this.setState({ people: peopleData });

      debugger;
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.getPeople();
  };

  handleSubmit = (e) => {
    const { people, input } = this.state;
    e.preventDefault();
    this.setState({ ifSearched: true });
    people.forEach((personDataObj) => {
      if (input === personDataObj.name) {
        this.setState({ person: personDataObj });
      }
    });
    debugger;
    // this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, person, ifSearched } = this.state;

    let text;
    if ({ ifSearched }) {
      if (input === person.name) {
        text = (
          <div>
            <h5>{person.name}</h5>
            <h5>{person.age}</h5>
            <h5>{person.gender}</h5>
          </div>
        );
      } else {
        text = (
          <div>
            <h5>Not Found</h5>
          </div>
        );
      }
    } else {
      text = <div></div>;
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
          ></input>
          <button type="submit">Submit</button>
        </form>
        {text}
      </div>
    );
  }
}