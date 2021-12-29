import useStyles from './movieDetails.style.js';
import {Typography} from '@material-ui/core'
import React from 'react';

const MovieDetails = (props) => {
  const classes = useStyles();
  const {details,name,isLink} = props;

  return (
    <Typography variant='body1' className={classes.details}>
      <span className={classes.name}>
        {name}  
      </span>
      {isLink?
      <a href={details} target='blank' className={classes.link}>{details}</a>
        :
        <span>{details}</span>
      }
    </Typography>
  );
}

export default MovieDetails;
