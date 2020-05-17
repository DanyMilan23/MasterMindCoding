import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Router from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  burbuja: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    height: "auto",
    width: "auto",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#17457f",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    letterSpacing: "-1px",
    borderRadius: "30px ! important",
    [theme.breakpoints.down("sm")]: {
      //width: "90vw",
      fontSize: "12px",
      height: "auto",
      paddingLeft: 5,
      paddingTop: 5,
      paddingRight: 15,
      paddingBottom: 5,
    },
  },
  container: {
    paddingTop:0,
    width: "auto",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  
}));
const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: "#17457f",
  m: 1,
  border: 2,
  style: { width: 'auto', height: 'auto' },
};
const burbuja = ({descripcion}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <Box borderRadius={'15px 40px 40px 15px'} {...defaultProps} className={classes.container} boxShadow={20} >
            <Typography className={classes.burbuja}>
            <b>
            {descripcion}
            </b>
            </Typography>
        </Box>
    
    </div>
  );
};

export default burbuja;
