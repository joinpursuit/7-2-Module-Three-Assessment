import { useState, useEffect } from "react";
import axios from "axios";
import "./people.css";

const People = () => {
  const [input, setInput] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({})
  const [personFound, setPersonFound] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput("")
    let selectedPerson = people.filter(p=>p.name===input);
    if (selectedPerson.length<1){
        setPersonFound(false)
        setPerson({name: "unfound"})
    }else{
        setPersonFound(true)
        setPerson(selectedPerson[0])
    }
  }

  const fetchPeople = async () => {
    try {
      const {data} = await axios.get("https://ghibliapi.herokuapp.com/people");
      setPeople(data);
    } catch (error) {
        setPeople([])
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleChange = (e) => setInput(e.target.value)

  let text;
  if (personFound) {
    if (person.age) {
      text = (<><h1>Name: {person.name}</h1>
        <p>Age: {person.age}</p>
        <p>Gender: {person.gender}</p>
        </>);
    } 
    }
     else if(person.name==="unfound"){ 
        text = <div>Not Found</div>; 
    }else { text = null; console.log(person.name)}

  return (
    <section className="peopleSection">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder={"Find Your Person"} />
        <button type="submit">Submit</button>
      </form>
      {text}
    </section>
  );
}

export default People;
