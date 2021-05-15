import axios from "axios";
import { useState } from "react";

const People = () => {
  const [input, setInput] = useState("");
  const [person, setPerson] = useState({});
  const [hasSearched, setHasSearched] = useState(false)

  const fetchPerson = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people`);
    debugger
    //   setPersonID(res.data.id);
    } catch (error) {
      setPerson([]);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPerson();
    setHasSearched(true);
  };

  let result;
  if (person.name) {
    person.map((person) => {
      result = (
        <h1>
          Name: {person.name} Age: {person.age} Gender: {person.gender} ID{" "}
          {person.id}
        </h1>
      );
    });
  } else if (hasSearched) {
    result = "Not Found";
  }

  return (
    <section>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={input}
          placeholder="Find Your Person"
        />
        <button>Submit</button>
      </form>
      <div>{result}</div>
    </section>
  );
};

export default People;
