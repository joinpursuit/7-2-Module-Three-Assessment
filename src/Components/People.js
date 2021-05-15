import axios from "axios";
import { useEffect, useState } from "react";

const People = () => {
  const [userInput, setUserInput] = useState("");
  const [people, setPeople] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [characterAge, setCharacterAge] = useState("");
  const [characterGender, setCharacterGender] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
   const filteredPerson = people.filter(person => person.name === userInput)
   
  
      
       
       if (filteredPerson.length !== 0){
           debugger
        setCharacterName(filteredPerson[0].name);
        setCharacterAge(filteredPerson[0].age);
        setCharacterGender(filteredPerson[0].gender);
       } else {
           setError(true)
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

      <h2>Name: {characterName}</h2>
      {characterAge && <h2>Age: {characterAge}</h2>}
      {characterGender && <h2>Gender: {characterGender}</h2>}
      {error === true &&<h2>Not Found</h2>}
    </div>
  );
};

export default People;
