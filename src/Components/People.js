import axios from "axios";
import { useState, useEffect } from "react";
import "./People.css";

const People = () => {
  const [userInput, setUserInput] = useState("");
  const [person, setPerson] = useState({});
  const [people, setPeople] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people");
      setPeople(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundPerson = people.find((person) => userInput === person.name);
    setUserInput("");
    setHasSearched(true);
    if (foundPerson) {
      setPerson(foundPerson);
    } else {
      setPerson({});
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <section id="People">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            placeholder="Find Your Person"
            value={userInput}
            required
          />
        </label>
        <button>Submit</button>
      </form>
      {person.name ? (
        <>
          <h2>{person.name}</h2>
          <h3>{person.age}</h3>
          <p>{person.gender}</p>
        </>
      ) : (
        hasSearched && <h2>Not Found</h2>
      )}
    </section>
  );
};

export default People;
