import './header.css';
import React from "react";
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {

    return (
        <div className="header">
            <div className="appname">
                <MovieIcon /> &nbsp;
                <a href="http://sagar-saini-iiits.github.io/movie-search-app/"> Movie Search </a>
            </div>

            <div className="searchbox">
                <SearchIcon sx={{ color: "black" }} />
                <input className='searchinput' placeholder="Search Movie" value={props.searchQuery}
                    onChange={props.onTextChange} />
            </div>
        </div>
    )
}

export default Header;


