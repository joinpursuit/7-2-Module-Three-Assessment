import { Component } from "react";
import axios from "axios";

import "./People.css"

class People extends Component {
  state = {
    input: "",
    personSearchArray: [],
    hasSearched: false,
    searchedPerson: []
  };

  handleChange = (e) => {
    const input = e.target.value.toLowerCase();
    this.setState({ input: input }); 
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ hasSearched: true });
    this.personMatch();
  };

  
  personSearch = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people");
      this.setState({ personSearchArray: res.data });
    } catch (error) {
      this.setState({ personSearchArray: [] });
    }
  };
  
  
  componentDidMount() {
    this.personSearch();  
  }
  
  
  personMatch = () => {
    const searchedPerson = this.state.personSearchArray.filter((person) => {
      return person.name.toLowerCase() === this.state.input
    })
    this.setState({searchedPerson: searchedPerson, input: ""})
  }

  render() {
    const { input, searchedPerson, hasSearched } = this.state;

    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="inputField"
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Find Your Person"
          ></input>
          <button type="submit" className="submitButton">Submit</button>
        </form>
        {hasSearched ? 
        <section className="personInfo">
          {searchedPerson.length ? <div>
            <p>{searchedPerson[0].name}</p> <p>{searchedPerson[0].age}</p> <p>{searchedPerson[0].gender}</p>
          </div> : "Not Found"}
          </section>
            : null}
      </div>
    );
  }
}

export default People;

