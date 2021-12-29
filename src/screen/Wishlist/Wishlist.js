import React from 'react';
import MovieImage from '../../components/movieImage/movieImage';

function Wishlist(props) {
const {favorites,handleOnClick} = props;


return (
    <React.Fragment>
        {favorites !== null && Object.keys(favorites).length !== 0 && favorites.map(movie=><MovieImage key={movie.imdbID} 
            path={movie.Poster} 
            id={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            handleOnClick={()=>handleOnClick(movie.imdbID)}
        />)}
    </React.Fragment>
  );
}

export default Wishlist;
