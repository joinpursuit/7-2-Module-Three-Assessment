import axios from "axios";
import { useEffect, useState } from "react";

const People = () => {
  const [input, setInput] = useState("");
  const [people, setPeople] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [person, setPerson] = useState([]);

  const fetchPeople = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people`);
      setPeople(res.data);
    } catch (error) {
      setPeople([]);
    }
  };


  useEffect(() => {
    fetchPeople();
  }, [])

  const handleInput = (e) => {
    setInput(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    people.forEach((person) => {
        if (input === person.name) {  
            setPerson(person);
        }
    });
    setHasSearched(true);
  };

  let result;
  if (hasSearched) {
    if (input === person.name) {
      result = (
        <section>
          <p>Name: {person.name}</p>
          <p> Age: {person.age}</p>
          <p>Gender: {person.gender}</p>
        </section>
      );
    } else {
      result = <div> Not Found</div>;
    }
}

  return (
    <section>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
