import { useState, useEffect } from 'react';
import axios from "axios";

export default function People() {
    const [input, setInput] = useState("")
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({})
    const [notAPerson, setNotAPerson] = useState("")

    useEffect(() => {
        fetchPeople()
    }, [])
    const fetchPeople = async () => {
        try{
        const res = await axios.get(`https://ghibliapi.herokuapp.com/people`)
        setPeople(res.data)
        }catch (error){
            setPeople([]) 
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

       const getPerson = people.find(eachPerson => eachPerson.name === input)
       if(getPerson === undefined){
        setPerson({})
        setNotAPerson("Not Found")
       }else{
           setPerson(getPerson)
       }
       setInput("")
    }
    const handleChange = (e) => {
        setInput(e.target.value)
        setNotAPerson("")
    }

    return (
        <div>
            <h1>Search for a Person</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange} placeholder="Find Your Person">
                </input>
                <button>Submit</button>
            </form>
            <div>
            <h3>{notAPerson}</h3>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.gender}</p>
          </div>
        </div>
    )
}
