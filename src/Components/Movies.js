// import { useState, useEffect } from "react";
// import axios from "axios";

// const Movies = () => {
//   const [movies, setMovies] = useState("");
//   const [movie, setMovie] = useState("");
//   const [movieUrl, setMovieUrl] = useState("")

//   const getMovieList = async () => {
//     try {
//       const res = await axios.get("https://ghibliapi.herokuapp.com/films");
//       setMovies(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getMovie = async (e) => {
//     try {
//       const res = await axios.get(`${e.target.value}`);
//       setMovie(res.data);
//     } catch (error) {
//         console.log(error)
//         setMovie("")
//     }
//   };

//   const handleChange () =>{

//   }
//   useEffect(() => {
//     getMovieList();
//   }, [movies]);

//   return (
//     <div className="movies-component">
//       <h1>Select a Movie</h1>
//       <div >
//         <select onChange={getMovie}>
//           <option value=""></option>
//           {movies
//             ? movies.map((singleMovie) => {
//                 return (
//                   <option key={singleMovie.id} value={singleMovie.url}>
//                     {singleMovie.title}
//                   </option>
//                 );
//               })
//             : ""}
//         </select>
//       {movie ? (
//           <section>
//           <br />
//           <h3> Title: {movie.title}</h3>
//           <br />
//           <div>Release Date: {movie.release_date} </div>
//           <br />
//           <div>Description: {movie.description} </div>
//         </section>
//       ) : (
//           ""
//           )}
//           </div>
//     </div>
//   );
// };

// export default Movies;

import { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
//   const [movieUrl, setMovieUrl] = useState("");

  const getMovieList = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovie = async (e) => {
    try {
      const res = await axios.get(`${e.target.value}`);
      setMovie(res.data);
    } catch (error) {
      console.log(error);
      setMovie([]);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="movies-component">
      

      {/* <h1>{movie ? movie.title : "Select a Movie"}</h1> */}

      <h1>Select a Movie</h1>
     
      <div>
        <select onChange={getMovie}>
          <option value=""></option>
          {movies.map((singleMovie) => {
            return (
              <option key={singleMovie.id} value={singleMovie.url}>
                {singleMovie.title}
              </option>
            );
          })}
        </select>
        {
          <div>
            <br />
            <h1>{movie.title}</h1>
            <br />
            <h1>
                {/* Release Date:  */}
                {movie.release_date} </h1>
            <br />
            <h1>
                {/* Description: */}
                 {movie.description} </h1>
          </div>
         }
      </div>
    </div>
  );
};

export default Movies;
