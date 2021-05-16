import axios from "axios";
import { useState, useEffect } from "react";
import "./People.css";

const People = () => {
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [people, setPeople] = useState("");

  const fetchPeople = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/people");
      // debugger;
      res.data.forEach((person) => {
        if (person.name === userInput) {
          setAge(person.age);
          setGender(person.gender);
          console.log(userInput, name, age);
        } else if (userInput !== person.name) {
          setName("Not Found")
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (userInput === "" ) {
      setName("Not Found")
      setAge("")
      setGender("")

    } else {
      setName(userInput)
      fetchPeople();
    }
    
  };

  return (
    <section id="People">
      <h1>Search for a Person</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input onChange={handleChange} placeholder="Find Your Person" />
        </label>
        <button>Submit</button>
      </form>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <p>{gender}</p>
    </section>
  );
};

export default People;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./People.css";

// const People = () => {
//   const [people, setPeople] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [person, setPerson] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");

//   const fetchPeople = async () => {
//     try {
//       const res = await axios.get("https://ghibliapi.herokuapp.com/people");
//       setPeople(res.data);
//     } catch (error) {
//       console.log(error);
//       setPeople([]);
//     }
//   };

//   const getPeopleInfo = people.filter((person) => {
//     return person.name === userInput;
//   });

//   const handleChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPerson(userInput);
//     setAge(getPeopleInfo[0].age);
//     setGender(getPeopleInfo[0].gender);
//   };

//   useEffect(() => {
//     fetchPeople();
//   }, []);

//   return (
//     <section id="People">
//       <form onSubmit={handleSubmit}>
//         <label>
//           <h1>Search for a Person</h1>
//           <input
//             value={userInput}
//             onChange={handleChange}
//             type="text"
//             placeholder="Find Your Person"
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//       {getPeopleInfo.length === 0 ? (
//         <h2>Not Found</h2>
//       ) : (
//         <>
//           <h2>Name: {person}</h2>
//           <h3>Age: {age}</h3>
//           <h3>Gender: {gender}</h3>
//         </>
//       )}
//     </section>
//   );
// };

// export default People;
