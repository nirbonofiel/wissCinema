import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React,{useState,useEffect} from 'react';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import { removeFromFavorites,isMovieFavorite} from '../../utils/utils.js';

const FavoriteIcon = (props) => {
  const {favIconClass,movieId,addToFavorites} = props;
  const [isFav,setIsFav] = useState();

  const handleOnAdd =()=>{
    setIsFav(!isFav);
    addToFavorites();
  }

  const handleOnRemove =()=>{
    setIsFav(!isFav);
    removeFromFavorites(movieId)
  }

  useEffect(()=>{
    setIsFav(isMovieFavorite(movieId))
  },[movieId])

  return (
    <React.Fragment>
    {isFav ? 
        <FavoriteSharpIcon onClick={handleOnRemove} className={favIconClass} color='error'/>
      :
        <FavoriteBorderIcon onClick={handleOnAdd} className={favIconClass} color='error'/>
    }
    </React.Fragment>
  );
}

export default FavoriteIcon;
