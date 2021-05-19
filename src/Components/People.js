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
    const input = e.target.value;
    this.setState({ input: input }); 
    // **insert regX for capitol or lowercase letters
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
      return person.name === this.state.input
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

// ### `/people`
// Displays the header "Search for a Person" above a text input with a "Search" button, in the upper ~400px of the page, centered.
// When a user inputs text and presses "Search", the name, age, and gender, of the character should appear below. **Bonus:** *Include the film/s (by name and any other fun info) that the character appears in.*
// This input should be case-insensitive. The input will accept a full name (no need for partial matches). If the user's input does not match a name (misspelled or otherwise), the text "Not Found" should display below the input.
// The input should clear once the "Search" button is pressed.
// It's OK if the age or gender of the character is "N/A".
// New inputs should replace the previously displayed information.
// ![Pre Search](./assets/search1.png)
// ![Successful Search](./assets/search2.png)
// ![Not found](./assets/search3.png)
