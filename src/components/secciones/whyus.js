import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//Component
import Valores from '../secciones/Whyus/valores'

const useStyles = makeStyles((theme) => ({
   title: {
    fontSize: "60px",
    lineheight: "20px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  container:{
    paddingTop:40,
    paddingLeft:56,
    paddingRight:56,
    marginBottom:90,
    [theme.breakpoints.down("sm")]: {
      paddingLeft:10,
      paddingRight:10,
    },
  }
}));
const Whyus = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {/*Aqui van las 1eras letras */}
          <Grid item xs={12} md={12} lg={12}>
            <Typography className={classes.title}> WHY US?</Typography>
          </Grid>
        </Grid>
      </Container>
      <Valores/>
    </div>
  );
};

export default Whyus;
