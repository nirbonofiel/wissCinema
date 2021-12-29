import axios from 'axios';
import {API_KEY} from '../utils/constants'
import { margeAndRemoveDuplicate } from '../utils/utils';

export const searchMovies = (value,setMovies,favorites) => {
  if(value !== ''){
    axios({
      method: 'get',
      url: 'http://www.omdbapi.com/?apiKey='+ API_KEY + '&s=' + value,
    })
    .then(res => onSuccessSearch(res.data,setMovies,favorites))
    .catch(err => console.log(err));
  }else{
    setMovies([]);
  }
};

export const movieInformation = (imdbID,setMovieInfo) => {
  axios({
      method: 'get',
      url: 'http://www.omdbapi.com/?apiKey='+ API_KEY + '&i=' + imdbID + '&plot=full',
    })
  .then(res => setMovieInfo(res.data))
  .catch(err => console.log(err));
};


const onSuccessSearch = (data,setMovies,favorites) =>{
  if(!data.hasOwnProperty('Error')){
    setMovies(margeAndRemoveDuplicate(favorites,data.Search));
  }else{
    setMovies(data);
  }
}
