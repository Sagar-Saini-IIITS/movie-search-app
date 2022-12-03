import React, { useState,useEffect } from "react";
import './movieinfocomponent.css';
import Axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY

function MovieInfoComponent(props) {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;
   
    useEffect(() => {
      Axios.get(
        `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
      ).then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);
  return (
    <div className='micontainer'>
        {movieInfo ? (
        <>
      <img src={movieInfo?.Poster} alt="" className="micoverimage" />
      <div className="movieinfocolumn">
        <span className="mimoviename">
        {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
        </span>
        <span className="mimovieinfo">
        IMDB Rating: <span>{movieInfo?.imdbRating}</span>
        </span>
        <span className="mimovieinfo">
        Year: <span>{movieInfo?.Year} </span>
        </span>
        <span className="mimovieinfo">
        Rated: <span>{movieInfo?.Rated}</span>
        </span>
        <span className="mimovieinfo">
        Released: <span>{movieInfo?.Released}</span>
        </span>
        <span className="mimovieinfo">
        Runtime: <span>{movieInfo?.Runtime}</span> 
        </span>
        <span className="mimovieinfo">
        Genre: <span>{movieInfo?.Genre}</span>
        </span>
        <span className="mimovieinfo">
        Director: <span>{movieInfo?.Director}</span>
        </span>
        <span className="mimovieinfo">
        Actors: <span>{movieInfo?.Actors}</span>
        </span>
        <span className="mimovieinfo">
        Plot: <span>{movieInfo?.Plot}</span>
        </span>
       
      </div>
      <span className="close" onClick={() => props.onMovieSelect()}>X</span>
      </>
      ) : (
        <div className="loading">
          <span>Loading... </span> </div>
      )}
    </div>
  )
}

export default MovieInfoComponent;