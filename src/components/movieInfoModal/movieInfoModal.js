import useStyles from './movieInfoModal.style.js';
import { Card, CardMedia, Modal, CircularProgress, CardContent, Grid, Typography} from '@material-ui/core'
import React,{ useEffect, useState } from 'react';
import MovieDetails from '../movieDetails/movieDetails';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import FavoriteIcon from '../favoriteIcon/favoriteIcon.js';
import {addToFavorites} from '../../utils/utils';


const MovieInfoModal = (props) => {
  const classes = useStyles();
  const [showProgress,setShowProgress] = useState(true);
  const {open,handleOnClose,movieInfo} = props;


  useEffect(()=>{
    if(Object.keys(movieInfo).length !== 0){
      setShowProgress(false);
    }
  },[movieInfo])

  return (
    <Modal open={open}>
      <Card className={classes.root}>
      <HighlightOffSharpIcon className={classes.close} onClick={handleOnClose}></HighlightOffSharpIcon>
      <FavoriteIcon favIconClass={classes.favIcon} movieId={movieInfo.imdbID} 
                    addToFavorites={()=>addToFavorites(movieInfo.Poster,movieInfo.Title,movieInfo.Year,movieInfo.imdbID)}/>
        {showProgress? 
          <CircularProgress />:
          <Grid className={classes.cardContainer}>
            <CardMedia
                component="img"
                image={movieInfo.Poster}
                className={classes.cardMedia}/>
            <CardContent>
                <Typography variant='h4' className={classes.cardTitle}>{movieInfo.Title}</Typography>
                <Typography variant='subtitle1' className={classes.cardSubTitle}>{movieInfo.Year}</Typography>
                <Grid className={classes.content}>
                    <Typography variant='body1' >{movieInfo.Genre}</Typography>
                    <MovieDetails name='IMDB Rating' details={`${movieInfo.imdbRating}/10`}/>
                    <MovieDetails name='Release Date' details={movieInfo.Released}/>
                    <MovieDetails name='Director' details={movieInfo.Director}/>
                    <MovieDetails name='Actors' details={movieInfo.Actors}/>
                    { movieInfo.Website !=='N/A' &&
                      <MovieDetails name='Website' details={movieInfo.Website} isLink/>
                    }
                    <Typography variant='body1' className={classes.plot}>{movieInfo.Plot}</Typography>
                </Grid>
            </CardContent>
          </Grid>
        }
      </Card>
    </Modal>
  );
}

export default MovieInfoModal;
