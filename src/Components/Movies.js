import React from "react"
import axios from "axios"

class Movies extends React.Component{
    // state= {movies:[], movie:{}}
    state = {movies: [], movie:{}, id:""}

    fetchMovies = async() =>{
        try {
            const res = await axios.get("https://ghibliapi.herokuapp.com/films")
            console.log(res.data)
            this.setState({movies:res.data})
            
        } catch (error) {
            this.setState({movies:[]})
            
        }

    }

    

    updateMovie = async(e) =>{
        this.setState({id: e.target.value})
        try {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`)
            debugger

            this.setState({movie: res.data})
        } catch (error) {
            
            this.setState({movie: {}})
        }
    }
    
    componentDidMount() {
        this.fetchMovies()
    }

    render (){
        const {movies, movie, id} = this.state
        const movieOptions = movies.map(movieObject => <option value={movieObject.id} key={movieObject.title}>{movieObject.title}</option>)
        
        return(

            <div>
                <h1>Select a Movie</h1>
                <select value={id} onChange={this.updateMovie}>
                <option value="" selected ></option>
                 {movieOptions}
                 </select>

               <h1>Title: {movie.title}</h1>
               <p>Release Date: {movie.release_date}</p>
               <p>Description: {movie.description}</p>

            </div>
        )
    }

}

export default Movies