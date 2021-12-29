import { Typography } from '@material-ui/core';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import useStyles from './App.style';
import SearchMovie from './screen/SearchMovie/SearchMovie';
import React,{useEffect, useState} from 'react';
import Search from './components/search/search';
import Wishlist from './screen/Wishlist/Wishlist';
import MovieInfoModal from './components/movieInfoModal/movieInfoModal';
import {movieInformation} from './services/apiService';
import { margeAndRemoveDuplicate } from './utils/utils';

function App() {
  const classes = useStyles();
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState("");
  const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem("favorites"))?
                                            JSON.parse(localStorage.getItem("favorites")):[]);
  const [movieInfo,setMovieInfo] = useState({});
  const [openModal,setOpenModal] = useState(false);
  
  const handleOnClick = (imdbID) => {
      setOpenModal(true);
      movieInformation(imdbID,setMovieInfo);
  }
  
  const handleOnClose = () =>{
      setOpenModal(false);
  }

  useEffect(()=>{
    const originalSetItem = localStorage.setItem;
    
    localStorage.setItem = function() {
        originalSetItem.apply(this, arguments);
        setFavorites(JSON.parse(localStorage.getItem("favorites")));
    };
    
  },[])

  useEffect(()=>{
    setMovies(margeAndRemoveDuplicate(favorites,movies));
  },[favorites])

  return (
    <React.Fragment>
        <Typography variant="h4" color="error" >
          <MovieCreationIcon  classes={{root:classes.movieIcon}} fontSize='large'/>WISS CINEMA
        </Typography>
        <Search handleResult={setMovies}  query={query} setQuery={setQuery} favorites={favorites}/>
        {query !== "" &&
          <SearchMovie movies={movies} handleOnClick={handleOnClick}/>
        }
        {!movies.hasOwnProperty('Error') && query === "" &&
          <Wishlist favorites={favorites} handleOnClick={handleOnClick}/>
        }
        <MovieInfoModal open={openModal} movieInfo={movieInfo} handleOnClose={handleOnClose}/>
    </React.Fragment>
  );
}

export default App;
