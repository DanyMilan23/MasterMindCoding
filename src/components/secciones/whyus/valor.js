import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "@material-ui/core/Link";
//componentes
import Burbuja from "./burbuja";

//estilos
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "60px",
    lineheight: "20px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 55,
      paddingTop: 5,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 5,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 10,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
      paddingLeft: 20,
      paddingTop: 10,
      width:'35vw'
    },

    lineHeight: "34px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 55,
      paddingTop: 5,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      paddingTop: 20,
      paddingLeft: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
      paddingLeft: 20,
      paddingTop: 20,
      width:'35vw'
    },
    lineHeight: "34px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle3: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 55,
      paddingTop: 25,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 40,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      paddingLeft: 20,
      paddingTop: 25,
      width:'35vw'
    },
    lineHeight: "28px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle4: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 55,
      paddingTop: 35,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 28,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
      paddingLeft: 20,
      paddingTop: 30,
      width:'35vw'
    },
    lineHeight: "34px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle5: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 55,
      paddingTop: 25,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 20,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      paddingLeft: 20,
      paddingTop: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
      paddingLeft: 20,
      paddingTop: 20,
      width:'35vw'
    },
    lineHeight: "34px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },

  subtitle: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 1,
      fontSize: "12px",
      paddingLeft: 55,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 5,
      fontSize: "16px",
      paddingLeft: 20,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 5,
      fontSize: "16px",
      paddingLeft: 20,
      width:'30vw'
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      paddingLeft: 20,
      paddingTop: 5,
      width:'25vw'
    },

    // fontSize: "16px",
    lineHeight: "20px",
    color: "#17457f",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 400,
    letterSpacing: "-1px",
  },
  container: {
    marginBottom: 30,
    display: "flex",
  },
  burbuja: {
    width: "auto",
    //paddingLeft: "3vw",
    //paddingRight: "5vw",
  },
  icon: {
    width: "8vw",
  },
  desc: {
    width: "35vw",
  },
}));

const valor = ({
  descripcion,
  imagen,
  titulo,
  resumen,
  tipo,
  estado,
  funcion,
 
}) => {
  const classes = useStyles();
  const [source, setSource] = useState(false);
  //media querys
  const matches = useMediaQuery("(min-width:1025px)");
  useEffect(() => {
    setSource(matches);
  }, [matches]);
  return (
    <div style={{paddingBottom:'25px'}}>
    <Grid
      container
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {/** imagen*/}
      <Grid item xs={2} md={2} lg={2}>
        <IconButton onClick={funcion}>
          <img src={imagen}/>
        </IconButton>
      </Grid>
      {/** Descripcion */}
      <Grid item xs={10} md={10} lg={8}>
        {tipo == 1 ? (
          <Typography className={classes.subtitle1}>
            <Link href="#" onClick={funcion}>
              {titulo}
            </Link>
          </Typography>
        ) : null}
        {tipo == 2 ? (
          <Typography className={classes.subtitle2}>
            <Link href="#" onClick={funcion}>
              {titulo}
            </Link>
          </Typography>
        ) : null}
        {tipo == 3 ? (
          <Typography className={classes.subtitle3}>
            <Link href="#" onClick={funcion}>
              {titulo}
            </Link>
          </Typography>
        ) : null}
        {tipo == 4 ? (
          <Typography className={classes.subtitle4}>
            <Link href="#" onClick={funcion}>
              {titulo}
            </Link>
          </Typography>
        ) : null}
        {tipo == 5 ? (
          <Typography className={classes.subtitle5}>
            <Link href="#" onClick={funcion}>
              {titulo}
            </Link>
          </Typography>
        ) : null}
        <Typography className={classes.subtitle}>{resumen}</Typography>
      </Grid>
      {source ? <Grid item xs={1} md={1} lg={2} />:null}
      {/** Burbuja en posicion de movil */}
      {source ? null : (
        <div className={classes.burbuja}>
          {estado ? <Burbuja descripcion={descripcion}/> : null}
        </div>
      )}
    </Grid>
    </div>
  );
};

export default valor;
