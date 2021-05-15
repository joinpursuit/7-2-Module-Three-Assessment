import axios from "axios";
import { Component } from "react";

class People extends Component {
  state = { input: "", person: {}, name: "", age: "", gender: "", show: false };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  hanldeSubmit = async (e) => {
    e.preventDefault();
    this.setState({ show: true });
    try {
      const { input } = this.state;
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people`);
      debugger;
      const ghibilPerson = res.data.filter((person) => person.name === input);
      debugger;
      const personName = ghibilPerson[0].name;
      const personAge = ghibilPerson[0].age;
      const personGender = ghibilPerson[0].gender;
      this.setState({
        name: personName,
        age: personAge,
        gender: personGender,
      });
    } catch (error) {
      console.log(error);
      this.setState({ name: "" });
    }
    this.setState({ input: "" });
  };

  render() {
    const { input, person, name, age, gender, show } = this.state;

    let text;
    if (show) {
      if (name) {
        text = (
          <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </div>
        );
      } else {
        text = <div>Not Found</div>;
      }
    } else {
      text = null;
    }

    return (
      <section>
        <h1>Search for a Person</h1>
        <form onSubmit={this.hanldeSubmit}>
          <input
            value={input}
            onChange={this.handleInput}
            placeholder="Find Your Person"
          />
          <button type="submit">Submit</button>
        </form>
        {text}
      </section>
    );
  }
}

export default People;
