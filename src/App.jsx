import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// key 959d5508
const API_URL = "http://www.omdbapi.com?apikey=959d5508";

// const movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
// };

const App = () => {
  const [movies,setMovies] = useState([])
  const [searchTerm,setSearchTerm]=useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {searchMovies(searchTerm)}} />
      </div>
    {movies.length > 0?(
      <div className="container">

{movies.map((movie,idx)=>(
          <MovieCard movie={movie} key={idx}/>
))}

      </div>
    ):(<div className="empty">
        <h2> No movies found </h2>
    </div>)}




    </div>
  );
};

export default App;
