import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const People = () => {
  const [input, setInput] = useState("");
  const [people, setPeople] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState([])

  const fetchPeople = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/people/`);
      setPeople(res.data);
    } catch (error) {
      console.log(error);
      setPeople([]);
    }
  };

  useEffect(() => {
    fetchPeople();
  },[]);

  const handleChange = (e) => {
    setInput(e.target.value);   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    const result = people.filter((person) => {
    console.log(person)
       return input === person.name
    });
    setResult(result)
  };


  return (
    <div>
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="Find Your Person"
        />
        <button>Submit</button>
      </form>
      {result[0] ?
        <div>
          <p>{result[0].name}</p>
          <p>{result[0].age}</p>
          <p>{result[0].gender}</p>
        </div> : "Not Found"}
    </div>
  );
};

export default People;
