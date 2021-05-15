import axios from "axios";
import { Component } from "react";

class People extends Component {
    state = {people:[], input:"", notFound: false, person: {}}

    fetchPeople = async () => {
        try {
            const res = await axios.get("https://ghibliapi.herokuapp.com/people/");
            this.setState({ people: res.data.map((persons) => {
                persons = {
                    name: persons.name,
                    age: persons.age,
                    gender: persons.gender
                }
            }) });
          //   debugger
          } catch (error) {
            this.setState({ people: [] });
          }
    }

    componentDidMount() {
        this.fetchPeople()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {input, people} = this.state
        people.forEach((person) => {
            if (person.name === input) {
                this.setState({person})
            } else {
                this.setState({notFound:true})
            }
        })

    }
    
    handleChange = (e) => {
        this.setState({input: e.target.value})
    }


    render() {
        const {people, input, person, notFound} = this.state
        return (
            <section>
                <h1 style={{ color: "yellow" }}>Search for a Person</h1>
                <form onClick={this.handleSubmit}>
                <input type="text" placeholder="Find Your Person" onChange={this.handleChange} />
                <button>Submit</button>
                </form>
                {notFound ? <h2>Not Found</h2> : null}
                <p style={{ color: "yellow" }}>Name: {person.name}</p>
                <p style={{ color: "yellow" }}>Age: {person.age} </p>
                <p style={{ color: "yellow" }}>Gender: {person.gender} </p>
            </section>
        )
    }
}
export default People