import axios from "axios";
import { useState } from "react";

const People = () => {
	// declare the state
	const [userInput, setUserInput] = useState("");
	const [person, setPerson] = useState([]);
	const [personAge, setPersonAge] = useState("");
	const [personGender, setPersonGender] = useState("");

	// take in the event
	const handleChange = (e) => setUserInput(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get("https://ghibliapi.herokuapp.com/people");
			// setPersonList(res.data);
			setPerson(res.data.filter((person) => person.name === userInput)[0].name);
			setPersonAge(
				res.data.filter((person) => person.name === userInput)[0].age
			);
			setPersonGender(
				res.data.filter((person) => person.name === userInput)[0].gender
			);
		} catch (err) {
			// setPersonList({});
		}
		setUserInput("");
	};

	return (
		<section>
			<h1>Search for a Person</h1>

			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					placeholder="Find Your Person"
					type="text"
					value={userInput}
				></input>
				<button type="submit">Submit</button>
			</form>
			<div>
				<p>Name: {person}</p>
				<p>Age: {personAge}</p>
				<p>Gender: {personGender}</p>
			</div>
		</section>
	);
};

export default People;

// IGNORE

// const [personData, setPersonData] = useState({});
// const [personID, setPersonID] = useState("");
// const [personList, setPersonList] = useState({});

// search for the userInput ... filter()
// res.data.filter(person=> person.name === "Pazu") ===> object for Pazu
// res.data.filter(person=> person.name === "Pazu").map(data => data.name) ==> [Pazu]
// res.data.filter(person=> person.name === "Pazu").map(data => data.age) ==> [13]
// res.data.filter(person=> person.name === "Pazu").map(data => data.gender) ==> [Male]

// get the list on cdm
// const getPeopleList = async () => {
// 	try {
// 		const res = await axios.get("https://ghibliapi.herokuapp.com/people");
// 		setPersonList(res.data);
// 		debugger;
// 	} catch (err) {
// 		setPersonList({});
// 	}
// };

// call on cdm
// useEffect(() => {
// 	getPeopleList();
// });

// useEffect(() => {
// 	getPersonData();
// }, [userInput]);

// const getPersonData = async () => {
// 	try {
// 		const res = await axios.get(
// 			`https://ghibliapi.herokuapp.com/people/${personID}`
// 		);
// 		setPersonData(res.data);
// 	} catch (err) {
// 		setPersonData({});
// 	}
// 	// setPerson(personList.filter((person) => person.name === userInput)[0]);
// };
