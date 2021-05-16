import axios from "axios"
import React from "react"

class People extends React.Component{
    state ={input:"", character:{}, hasSearched: false}

    handleSubmit = async (e)=>{
        const {input} = this.state
        this.setState({hasSearched:true})
        e.preventDefault()
        try {
            const res =  await axios.get(`https://ghibliapi.herokuapp.com/people/?name=${input}`) 
            debugger
            this.setState({character: res.data[0]})
        } catch (error) {
            this.setState({character: {}})
        }
        this.setState({input:""})
    }

    handleChange = (e)=>{
        this.setState({input: e.target.value})
    }

    render(){
        const {input, character, hasSearched} = this.state

        let display;
        if (hasSearched) {
            if (character ? character.name : ""){
                display = 
                <div>
                <h1>Name: {character.name}</h1>
                <p>Age: {character.age}</p>
                <p>Gender: {character.gender}</p>
                </div>
            } else {
              display=  <div>Person Not Found!</div>
            }
        } else {
            display = null
        }
        return(
            <div>
                <h1>Search for a Person</h1>
                <form onSubmit ={this.handleSubmit}>
                    <input type="text" value ={input} onChange={this.handleChange} placeholder="Find Your Person"/>
                    <button type="submit">Submit</button>
                </form>

                {display}

                
            
            

            </div>
        )
    }
}

export default People