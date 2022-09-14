import React from "react";
import { apiKey } from "./configs/constatns";
import { useEffect } from "react";

// assets
import searchIcon from "./search.svg";

// components
import MovieCard from "./components/MovieCard";

import "./App.css";

const API_URL = "https://www.omdbapi.com/?apikey=" + apiKey;

const movie1 = {
  title: "De Superman à Spider-Man: L'aventure des super-héros",
  year: "2001",
  imdbID: "tt0420574",
  type: "movie",
  poster:
    "https://m.media-amazon.com/images/M/MV5BNDM0N2NmYjctMTI3ZC00NTQyLWI1YWMtZDBlNWJjYzBkMDlhXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg",
};

const App = () => {
  //   const [response, setResponse] = useState("");

  // get mobie by title
  const getMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    console.log(data.Search);
  };

  // fetch data as soon as page is loaded
  useEffect(() => {
    getMovie("Super Man");
  }, []);

  return (
    <div className="app">
      <h1>Movies Land</h1>

      {/* Search Box */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={"Superman"}
          onChange={() => {}}
        />
        <img src={searchIcon} alt={"searchIcon"} />
      </div>

      {/* Movies Card */}
      <MovieCard movie={movie1} />
    </div>
  );
};

export default App;
