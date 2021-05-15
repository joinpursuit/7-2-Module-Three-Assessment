import axios from "axios";
import React, { useState } from "react";
                // `https://ghibliapi.herokuapp.com/people/${input}`
const People =()=>{
    const [input,setInput] = useState('');
    const [people,setPeople] = useState({});
    const [hasSearch,setHasSearch] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSearch(true)
        let inputArr = input.toLocaleLowerCase().split(' ');
        // console.log(inputArr)
        let newStr = inputArr.map(word => {
            const toCapital = ([firstLetter, ...restOfWord]) => {
                return firstLetter.toUpperCase() + restOfWord.join('')
            }
            return toCapital(word);
        })
        const newInput = newStr.join(' ')
        try {
            const res = await axios.get(
                `https://ghibliapi.herokuapp.com/people/?name=${newInput}`
            )
            setPeople(res.data);
        } catch(err) {
            setPeople({})
        }
        setInput('')
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    let displayInfo;

    if(hasSearch) {
        if(people[0]?.name) {
            displayInfo = (<div>
                <p>Name: {people[0]?.name}</p>
                <p>Age: {people[0]?.age}</p>
                <p>Gender: {people[0]?.gender}</p>
            </div>);
        } else {
            displayInfo = <div>Not Found</div>
        }
    } else {
        displayInfo = null
    }
    return (
        <section>
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={input}
                    onChange={handleChange}
                    placeholder={'Find Your Person'}
                />
                <button type='submit'>Submit</button>
            </form>
            {displayInfo}
        </section>
    )
}
export default People;