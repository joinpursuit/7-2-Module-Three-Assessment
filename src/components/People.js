import { useState, useEffect } from "react";
import axios from "axios";

const People = () => {
  const [input, setInput] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [hasSearched, setHasSearched] = useState(false)

  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const fetchPeople = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people`);
      setPeople(res.data);
      debugger;
    } catch (error) {
      console.log(error);
      setPeople([]);
    }
  };

  useEffect(() => fetchPeople(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true)
    people.forEach((person) => {
      if (input === person.name) {
        setPerson(person);
      }
    });
  };

  let result;
  if (hasSearched) {
      if (input === person.name) {
        result = (
          <div>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
            <h3>Gender: {person.gender}</h3>
          </div>
        );
      } else {
        result = <div>Not Found</div>
      }
  } else {
      result = <div></div>
  }

  return (
    <main>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInput}
          placeholder="Find Your Person"
        />
        <button>Submit</button>
        {result}
      </form>
    </main>
  );
};

export default People;
