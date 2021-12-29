import React, { useState } from 'react';
import useStyles from './movieImage.style.js';
import {addToFavorites} from '../../utils/utils';
import FavoriteIcon from '../favoriteIcon/favoriteIcon.js';
import {Typography } from '@material-ui/core';

const MovieImage = (props) => {
  const classes = useStyles();
  const [showOnHover,setShowOnHover] = useState(false);
  const {path,title,year,handleOnClick,id} = props;

  return (
    <div className={classes.imageContiner}>
      <img src={path} className={classes.image} 
        onClick={()=>handleOnClick()}
        onMouseOver={()=>setShowOnHover(true)} 
        onMouseOut={()=>setShowOnHover(false)}
        />
        <FavoriteIcon favIconClass={classes.favIcon} movieId={id} addToFavorites={()=>addToFavorites(path,title,year,id)}/>
      {showOnHover && 
        <div>
          <Typography className={classes.movieTitle}>{title}</Typography>
          <Typography className={classes.year}>{year}</Typography>
        </div>
      }
    </div>
  );
}

export default MovieImage;
