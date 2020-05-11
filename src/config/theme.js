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
      fontFamily:"'Roboto-Condensed',Helvetica,Arial,sans-Serif",
      fontSize: '18px',
      lineHeight: '27px',
      color: '#171c48',
      fontWeight: 400,
    },
  },
   
});

export default theme;
