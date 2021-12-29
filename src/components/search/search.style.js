import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    '& fieldset': {
      borderColor: '#FFD700',
    },

    '& label,input': {
      color:"#f1f1f1"
    },
  },
  subTitle:{
    color: '#ffffff',
    fontSize:'1.25rem',
    marginLeft: '15px',
    marginTop: '35px'
  },

  line:{
    marginLeft:15,
    marginRight:15
  }

}));

export default useStyles
  