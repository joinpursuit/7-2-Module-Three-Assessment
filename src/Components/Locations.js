import React from "react"
import axios from "axios"
class Locations extends React.Component{
    state ={places:[], showLocation: false}

    fetchLocations = async() =>{
        try {
            const res= await axios.get("https://ghibliapi.herokuapp.com/locations")
            this.setState({places: res.data})
        } catch (error) {
            
        }

    }

    componentDidMount (){
        this.fetchLocations()
    }

    handleClick = (e) =>{
        this.setState((prevState)=>{
            return {showLocation: !prevState.showLocation}
        })

    }
    render(){
        const {places, showLocation} = this.state
        const locations = places.map(place=> <li>Name:{place.name} 
                                                <br/>
                                                Climate: {place.climate === "TODO" ? "Unknown": place.climate}
                                                <br/>
                                                Terrain: {place.terrain === "TODO" ? "Unknown": place.terrain}
                                                </li>)

        return(
        <div>
            <h1>List of Locations</h1>
            <button onClick={this.handleClick}>{showLocation ? "Hide Locations" : "Show Locations"}</button>
            
            {showLocation ?  <ul>{locations}</ul> : <ul></ul>}

        </div>
        )
    }
}

export default Locations