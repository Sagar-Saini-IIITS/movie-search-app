import React from "react";
import './moviecomponent.css';
const MovieComponent = (props) => {
    

  const { Title, Year, imdbID, Type, Poster } = props.movie;
    return(
    <div className="moviecontainer"   onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}> 
    <img src={Poster} alt="" className="coverimage"></img>
    <span className="moviename"> {Title}</span>
    <div className="infocolumn">
    <span className="movieinfo"> {Year}</span>
    <span className="movieinfo"> {Type} </span>
    </div>
     </div>
    );
};
export default MovieComponent;