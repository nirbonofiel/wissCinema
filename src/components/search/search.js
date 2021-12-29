import React,{useState} from 'react';
import useStyles from './search.style.js';
import { debounce } from 'lodash';
import TextField from '@material-ui/core/TextField';
import { Container, Typography } from '@material-ui/core';
import {searchMovies} from '../../services/apiService';

function Search(props) {
const classes = useStyles();
const {handleResult,setQuery,query,favorites} = props;
const [debouncedCallApi] = useState(() => debounce(searchMovies, 1000));


const handleOnChange = (val) => {
    setQuery(val);
    debouncedCallApi(val,handleResult,favorites); 
}


return (
    <React.Fragment>
        <Container maxWidth="xs">
            <TextField 
                fullWidth
                value={query}
                id="outlined-textarea"
                label="Search Movie"
                classes={{root:classes.search}}
                variant="outlined"
                onChange={(e)=>handleOnChange(e.target.value)}/>
        </Container>
        {query === '' ? 
        <Typography classes={{root:classes.subTitle}}>Your Wishlist</Typography> :
        <Typography classes={{root:classes.subTitle}}>Search Results For "{query}"</Typography>
    }
        <hr className={classes.line}/>
    </React.Fragment>
  );
}

export default Search;
