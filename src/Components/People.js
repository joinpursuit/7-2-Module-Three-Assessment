import axios from "axios";
import { useEffect, useState } from "react";

const People = () => {
  const [userInput, setUserInput] = useState("");
  const [people, setPeople] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [characterAge, setCharacterAge] = useState("");
  const [characterGender, setCharacterGender] = useState("");
  const [error, setError] = useState(false);
  const [match, setMatch] = useState(false)

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    people.map((person) => {
      if (userInput.toLowerCase() === person.name.toLowerCase()) {
        debugger;
        setError(false);
        setCharacterName(person.name);
        setCharacterAge(person.age);
        setCharacterGender(person.gender);
        setMatch(true)
      }
    });

    if (match === false) {
      debugger;
      setError(true);
      setCharacterName("");
      setCharacterAge("");
      setCharacterGender("");
    }
  };

  const fetchPeople = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people`);

      setPeople(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPeople();
    console.log(people);
  }, []);

  useEffect(() => {});

  return (
    <div>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          placeholder="Find Your Person"
          onChange={handleInputChange}
        ></input>
        <button type="submit">Submit</button>
      </form>

      {characterName && <h2>Name: {characterName}</h2>}
      {characterAge && <h2>Age: {characterAge}</h2>}
      {characterGender && <h2>Gender: {characterGender}</h2>}
      {error === true && <h2>Not Found</h2>}
    </div>
  );
};

export default People;
