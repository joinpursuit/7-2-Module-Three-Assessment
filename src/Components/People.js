// import axios from "axios";
import { useState } from "react";
const People = () => {
  const [userInput, setUserInput] = useState("");

//   const fetchPersonInfo = async () => {
//     try {
//       const res = await axios.get("https://ghibliapi.herokuapp.com/people");
//       debugger;
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();


    // debugger
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section id="People">
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Search for a Person</h1>
          <input onChange={handleChange} type="text" />
        </label>
      </form>
      <button>Search</button>
      <p>{userInput}</p>
      <h2>name</h2>
      <h3>age</h3>
      <h3>gender</h3>
    </section>
  );
};

export default People;
