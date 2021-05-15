import axios from 'axios';
import { Component } from 'react';

class Locations extends Component {
    state = {locations: [], showLocations: false}

    componentDidMount() {
        this.fetchLocations()
    }

    fetchLocations = async () => {
        try {
            const res = await axios.get("https://ghibliapi.herokuapp.com/locations")
            debugger
            this.setState({locations: res.data})
        } catch (err) {
            this.setState({locations: []})
        }
    }

    handleClick = (e) => {
        this.setState((prevState) => {
            return { showLocations: !prevState.showLocations}
        })
    }

    render() {
        const {locations, showLocations} = this.state;
        return(
            <section>
                <h1>List of Locations</h1>

                <button onClick={this.handleClick}>{showLocations ? "Hide Locations" : "Show Locations"}</button>

                {showLocations ? (

                <ul>
                    {locations.map(locationObj => {
                        return <li key={locationObj.name}>{locationObj.name}</li>
                    })}
                </ul>
                ): <ul></ul>}
            </section>
        )
    }
}

export default Locations;