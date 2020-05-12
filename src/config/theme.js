import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#181c49',
    },
    secondary: {
      main: '#ff1744',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    //fontFamily: "'Open Sans', sans-serif",
    button: {
      fontSize: '21px',
      lineHeight: '29px',
      color: '#171c48',
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
    },
  },
   
});

export default theme;
