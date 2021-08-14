import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  details: {
    maxWidth: '100%',
  },
  detailmedia: {
    height: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  catInput: {
    width: '9.5rem',
    height: '3.41rem',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  navbar: {
    height: '80px',
    padding: '0.3rem',
  },
  appbar: {
    width: '100%',
    height: '5.938rem',
    margin: '0 0 2.375rem',
    padding: '0.901rem 6.188rem 1.688rem 0.001rem',
    backgroundColor: '#f94f90',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  logo: {
    color: '#000000',
  },
}));

export default useStyles;
