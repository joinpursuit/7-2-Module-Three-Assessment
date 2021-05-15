import axios from "axios";
import { Component } from "react";

class People extends Component {
  state = {
    people: [],
    id: "",
    person:{},
    name:"",
    age:"",
    gender:""
  };

  handleForm = async(e) =>{
      e.preventDefault()
      const {person} = this.state
      if(person[0]){
      this.setState({
        name: person[0].name,
        age: person[0].age,
        gender: person[0].gender
      })}else{
          this.setState({
              name:"Not Found",
              age:null,
              gender:null
            })

      }
    
debugger
  }

  handleChange = async(e) => {
      const {people} = this.state
      if(e.target.value){
      this.setState({person:people.filter(person => person.name === e.target.value)})   
      }
  };

  fetchPeople = async () => {
      try{
    const res = await axios.get(`https://ghibliapi.herokuapp.com/people/`);
    this.setState({
      people: res.data,
    });
}catch(error){
this.setState({
    name:"",
    age:"",
    gender:""
})
}
  };

  componentDidMount() {
    this.fetchPeople();
  }

  render() {
    const { name, age, gender } = this.state;
    return (
      <div>
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleForm}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Find Your Person"
          />
          <button>Submit</button>
        </form>
        {name ? 
        <section>
          <h2>Name: {name}</h2>
          <h3>Age: {age}</h3>
          <h3>Gender: {gender}</h3>
        </section>
        : null}
      </div>
    );
  }
}

export default People;
