import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 415,
      md: 825,
      lg: 1025,
      xl: 1680,
    },
  },
  palette: {
    primary: {
      main: "#171c48",
    },
    secondary: {
      main: "#ff1744",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    //fontFamily: "'Open Sans', sans-serif",
    button: {
      fontSize: "21px",
      lineHeight: "29px",
      color: "#171c48",
      fontFamily: "'Robot', sans-serif",
      fontWeight: 400,
      letterSpacing: "-1px",
    },
  },
});

export default theme;
