import axios from "axios";
import React, { useState } from "react";
const People =()=>{
    const [input,setInput] = useState('')
    const [people,setPeople] = useState({})
    const [hasSearch,setHasSearch] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSearch(true)
        try {
            const res = await axios.get(
                `https://ghibliapi.herokuapp.com/people/?name=${input}`
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
    let text;
    if(hasSearch) {
        if(people[0]?.name) {
            text = (<div>
                <p>Name: {people[0]?.name}</p>
                <p>Age: {people[0]?.age}</p>
                <p>Gender: {people[0]?.gender}</p>
            </div>);
        } else {
            text = <div>Not Found</div>
        }
    } else {
        text= null
    }
    return (
        <section>
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={handleChange} placeholder={'Find Your Person'}/>
                <button type='submit'>Submit</button>
            </form>
            {text}
        </section>
    )
}
export default People;
