import axios from 'axios';
import { Component } from 'react';


class People extends Component {
    state = {input: "", people: {}, }

    handleSubmit = async(e) => {
        e.preventDefault();
       
        try {
            const { input  } = this.state;
            const res = await axios.get(`https://ghibliapi.herokuapp.com/people/?name=${input}`);
            this.setState({people: res.data[0]});
        }catch (err) {
            this.setState({people: {} });
        }
        this.setState({input: "" });
    };
    
    handleChange = async (e) => {
        this.setState({input: e.target.value});
        
    };
    
    
    render() {
        const { input, people, hasSearched } = this.state;
        
        // let text; 
        // if (hasSearched) {
        //     if(people?.name){
        //         <div>
        //             <p>Name: {people.name}</p>
        //         </div>
        //     } else {
        //         text = <div> Not Found</div>
        //     }
        // } else {
        //     text = null;
        // }
        return(
            <section>
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={input} onChange={this.handleChange} placeholder="Find Your Person" />
                    <button type="submit">Submit</button>
                </form>
                 {people ? (
                    <div>
                        <p>Name: {people.name}</p>
                        <p>Age: {people.age}</p>
                        <p>Gender: {people.gender}</p>  

                    </div>
                ) : (
                    <div>Not Found</div>
            )}

               
            </section>
        )
    }
}

export default People;