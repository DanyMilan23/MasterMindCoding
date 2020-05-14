import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//Component
import Valores from './valores'

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
    marginBottom:50
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
          <Grid xs={12} md={6} lg={4}>
            <Typography className={classes.title}> WHY US?</Typography>
          </Grid>
          <Grid  xs={0} md={6} lg={8} />
        </Grid>
      </Container>
      <Valores/>
    </div>
  );
};

export default Whyus;
