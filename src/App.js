import React from "react";
import { useEffect, useState } from "react";
import { getMovie } from "./services/movies_api";

// assets
import searchIcon from "./search.svg";

// components
import MovieCard from "./components/MovieCard";

import "./App.css";

// const movie1 = {
//   title: "De Superman à Spider-Man: L'aventure des super-héros",
//   year: "2001",
//   imdbID: "tt0420574",
//   type: "movie",
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BNDM0N2NmYjctMTI3ZC00NTQyLWI1YWMtZDBlNWJjYzBkMDlhXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg",
// };

const App = () => {
  // define state that holds list of fetched Movies
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovies = async (title) => {
    const data = (await getMovie(title)).Search;
    setMovies(data); // set the movies
  };

  useEffect(() => {
    fetchMovies("Need for speed");
  }, []);

  return (
    <div className="app">
      <h1>Movies Land</h1>

      {/* Search Box */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt={"searchIcon"}
          onClick={() => {
            fetchMovies(query);
          }}
        />
      </div>

      {/* Movies Cards */}
      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="empty">No Movies Found</div>
        )}
      </div>
    </div>
  );
};

export default App;
