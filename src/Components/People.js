import { useState } from "react";
import axios from "axios";

const People = () => {
  const [searchInput, setSearchInput] = useState("");
  const [person, setPerson] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const getPerson = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people/`);
      let arr = res.data.map((onePerson) => {
        return onePerson.name;
      });
      let index = arr.indexOf(searchInput);
      if (index === -1) {
        setErrorMessage("Not Found")
        setPerson("")
      } else {
        setPerson(res.data[index]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="people-component">
      <h1>Search for a Person</h1>
      <form onSubmit={getPerson}>
        <input placeholder="Find Your Person" onChange={handleChange} />
        <button>Submit</button>
      </form>
      <section>
          {person? 
          <div>
              <br/>
              <div>Name: {person.name}</div>
              <br/>
              <div>Age: {person.age}</div>
              <br/>
              <div>Gender: {person.gender}</div>
          </div>
        :errorMessage}
        
      </section>
    </div>
  );
};

export default People;
