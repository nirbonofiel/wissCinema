import React from 'react';
import useStyles from './SearchMovie.style';
import {Typography } from '@material-ui/core';
import MovieImage from '../../components/movieImage/movieImage';

function SearchMovie(props) {
const classes = useStyles();
const {movies,handleOnClick} = props;

return (
    <React.Fragment>
        {movies.hasOwnProperty('Error') ? 
        <Typography classes={{root:classes.subTitle}}>No results found</Typography> 
        :Object.keys(movies).length !== 0 && movies.map(movie=><MovieImage key={movie.imdbID} 
            path={movie.Poster} 
            id={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            handleOnClick={()=>handleOnClick(movie.imdbID)}
        />)}
    </React.Fragment>
  );
}

export default SearchMovie;
