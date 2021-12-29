import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth:1000,
        display: 'flex',
        margin: '50px auto',
        height:520,
        position: 'relative',
        background: 'rgba(34,34,34)'
    },
    close:{
        color:"#ffffff",
        position:'absolute',
        right:6,
        top:4,
        cursor:'pointer'
    },
    favIcon:{
        position:'absolute',
        right:35,
        top:4,
        cursor:'pointer'
    },
    cardMedia:{
        objectFit:'initial',
        width:450,
        '&.MuiCardMedia-media':{
            padding:'15px'
        }
    },
    cardContainer:{
        display:'flex',
        width:'100%'
    },
    cardTitle:{
        letterSpacing:0,
        color: '#f1f1f1'
    },
    cardSubTitle:{
        color:'#f1f1f187',
        fontWeight:300,
        lineHeight:1
    },
    content:{
        marginTop:20,
        color:'#f1f1f1'
    },
    plot:{marginTop:20}
}));

export default useStyles
  