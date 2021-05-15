import axios from "axios";
import React, { useState } from "react";

const People =()=>{
    const [input,setInput] = useState('');
    const [people,setPeople] = useState({});
    const [hasSearch,setHasSearch] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!input) {
            return null;
        }
        setHasSearch(true)
        let inputArr = input.toLocaleLowerCase().split(' ');
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
            setPeople(res.data[0]);
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
        if(people?.name) {
            displayInfo = (<div>
                <p>Name: {people?.name}</p>
                <p>Age: {people?.age}</p>
                <p>Gender: {people?.gender}</p>
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