import React from "react";
import MovieComponent from "./MovieComponent";
import "./body.css";
function Body(props) {
    return (
        <div className="movielistcontainer">
            {props.movieList?.length ? (
                props.movieList.map((movie, index) => (
                    <MovieComponent
                        key={index}
                        movie={movie}
                        onMovieSelect={props.onMovieSelect}
                    />
                ))
            ) : (
                <div className='searchmovie'> Search above to see results :) </div>
            )}
        </div>
    )
}

export default Body