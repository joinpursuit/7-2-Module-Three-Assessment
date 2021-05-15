import { Component } from "react";
import axios from "axios";

class People extends Component {
  state = { input: "", person: {}, searched: false };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ searched: true });
    try {
      const { input } = this.state;
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/people/${input}`
      );
      this.setState({ person: res.data });
      //debugger;
    } catch (error) {
      console.log("error");
    }
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, person, searched } = this.state;
    let character;
    if (searched) {
      if (person.name) {
        character = (
          <div>
            <p>Name: {person.name} </p>
            <p>Age: {person.age}</p>
            <p>Gender: {person.gender}</p>
          </div>
        );
      } else {
        character = <div>Not Found</div>;
      }
    }; 
    
    

    return (
      <section>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder={"Find Your Person"}
          />
          <button type="search">Submit</button>
        </form>
        {character}
      </section>
    );
  }
};

export default People;
