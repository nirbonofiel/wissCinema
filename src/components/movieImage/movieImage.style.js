import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        height: 300,
        width: 200,
        margin: '15px 20px 20px 15px',
        '&:hover':{
            opacity:0.5,
        }
    },
    imageContiner:{
        position: 'relative',
        display: 'inline-block',
    },
    favIcon:{
        position: 'absolute',
        left: 20,
        top: 20,
        display: 'block',
        cursor: 'pointer',
        zIndex: 99
    },
    movieTitle:{
        position: 'absolute',
        textAlign:'center',
        left: '50px',
        right: '50px',
        top: '50%',
        color:'#FFD700',
        display: 'block',
        zIndex: 99
    },
    year:{
        position: 'absolute',
        textAlign:'center',
        left: '50px',
        right: '50px',
        bottom: '20%',
        display: 'block',
        color:'#FFD700',
        zIndex: 99
    }
    
}));

export default useStyles
  