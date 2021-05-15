import React, {useState} from "react";
import axios from "axios"

const People = () => {
const [input, setInput] = useState('')
const [people, setPeople] = useState([]);
const [found, setFound] = useState(false)

const handleSubmit = async (e) =>{
    e.preventDefault();
    setFound(true);
    try{
        const res = await axios.get(`https://ghibliapi.herokuapp.com/people/?name=${input}`
        )
        setPeople(res.data[0]);
    }catch(error){
        setPeople({})
    }
    setInput('')
}
const handleChange = (e) => setInput(e.target.value);
    let text;
    if(found){
        if(people?.name){
            text = (
                <div>
                    <p>Name: {people?.name}</p>
                    <p>Age: {people?.age}</p>
                    <p>Gender: {people?.gender}</p>
                </div>);
        }else{
            text = <div>Not Found</div>
        }
    }else{
        text = null
    }
    return (
      <section>
        <h1>Search for a Person</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} placeholder="Find Your Person" />
          <button type="submit">Submit</button>
        </form>
        {text}


      </section>
    )
  }


export default People;