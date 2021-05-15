import { Component } from "react";
import axios from "axios";

class People extends Component {
  state = { input: "", people: [], hasSearched: false, ids: {} };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ hasSearched: true });
    try {
      const { input } = this.state;
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people/`);
      this.setState({ people: res.data });
      
    } catch (err) {
      this.setState({ people: {} });
    }
    this.setState({ input: "" });
    debugger;
    {
      const names = this.state.people.map((movie) => {
        const movieContainer = {};
        movieContainer[movie.name] = movie.id;
        return movieContainer;
      });
    //   console.log(names);
      this.setState({ ids: names })
    }
    // console.log(this.state)
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    const { input, people, hasSearched} = this.state;

    let text; 
    if(hasSearched) {
        if(people.name) {
            text = (
              <div>
                <p>Name: {people.input}</p>
                <p>Age: {people.age}</p>
                <p>Gender: {people.gender}</p>

              </div>
            );
        } else {
            text = <div>Person Not Found!</div>;
        }
    } else {
        text = null; 
    }

    return (
      <section>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={people.input}
            onChange={this.handleChange}
            placeholder={"Find Your Person"}
        
          />
          <button type="submit">Submit</button>
        </form>
 {text} 
      </section>
    );
  }
}

export default People;
