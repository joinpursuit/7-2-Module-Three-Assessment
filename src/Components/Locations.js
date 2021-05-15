import axios from 'axios';
import { Component } from 'react';
import "./NavBar.css"

class Locations extends Component {
    state = { locations: [], showLocations: false }

    componentDidMount() {
        this.getLocations()
    }

    getLocations = async () =>{
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/locations`)
            this.setState({locations: res.data})
        } catch (error) {
            this.setState({locations: []})
        }
    }

    handleClick = ()=>{
        this.setState(prevState=>{
            return {showLocations: !prevState.showLocations}
        })
    }

    render() {
        const {locations, showLocations} = this.state
        return (
            <section className="locations">
               <h1>List of Locations</h1> 
               <button type="button" onClick={this.handleClick}>
                   {showLocations? "Hide Locations" : "Show Locations"}
                   </button>
               {showLocations ? (
                   <ul>
                       {locations.map(location=>{
                           return (
                           <li key={location.name}>
                               <p>Name: {location.name}</p>
                               <p>Climate: {location.climate === "TODO"? "Unknown":location.climate}</p>
                               <p>Terrain: {location.terrain=== "TODO"? "Unknown":location.terrain}</p>
                           </li>)
                       })}
                   </ul>
               ) : <ul></ul>}
            </section>
        );
    }
}

export default Locations;