import './App.css';
import React, { useState } from "react";
import Axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";
import Header from "./components/Header";
import Body from "./components/Body";
const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    // debouncing to make single api call when we fininshed typing the search query.
    // setTimeout() executes the passed function after given time. The number id value returned by setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 1000);
    updateTimeoutId(timeout);
  };

  return (
    <div className="container">
      <Header searchQuery={searchQuery} onTextChange={onTextChange} />
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      {movieList?.length ? <div className='searchresults'>Search results for : <span> {searchQuery} </span>  </div> : ""}
      <Body movieList={movieList} onMovieSelect={onMovieSelect} />

    </div>
  );
}

export default App;
