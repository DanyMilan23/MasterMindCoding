import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//componentes
import Burbuja from "./burbuja";

//estilos
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: "60px",
    lineheight: "20px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle3: {
    paddingTop: 30,
    //paddingLeft: 20,
    //fontSize: "32px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
      paddingLeft: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      paddingLeft: 15,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 45,
    },
    lineHeight: "34px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle: {
    paddingTop: 8,
    //paddingLeft: 10,
    [theme.breakpoints.down("lg")]: {
      fontSize: "24px",
      paddingLeft: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      paddingLeft: 15,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      paddingLeft: 45,
    },
    lineHeight: "34px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  subtitle2: {
    //paddingLeft: 10,
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
      paddingLeft: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      paddingLeft: 15,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      paddingLeft: 45,
    },

    // fontSize: "16px",
    lineHeight: "20px",
    color: "#17457f",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 400,
    letterSpacing: "-1px",
  },
  img: {
    //height:'18vh',
    //width:'18vh',
    paddingLeft: "20px",
    height: "72px",
    width: "68px",
  },
  burbuja: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: "auto",
    width: "30vw",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#17457f",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 400,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      fontSize: "12px",
      height: "auto",
      paddingLeft: 5,
      paddingTop: 5,
      paddingRight: 5,
      paddingBottom: 5,
    },
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
  const matches = useMediaQuery("(min-width:1280px)");
  useEffect(() => {
    setSource(matches);
  }, [matches]);
  return (
    <div>
      <Container maxWidth>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {/** Burbuja en posicion de escritorio */}
          {source ? <Grid item xs={false} md={1} lg={1} /> : null}
          {source ? (
            <Grid item xs={false} md={5} lg={5}>
              {estado?<Burbuja descripcion={descripcion} />:null}
            </Grid>
          ) : null}

          {/*source ? <Grid item xs={false} md={1} lg={1} /> : null*/}
          {/** imagen*/}
          <Grid item xs={2} md={2} lg={1}>
            <IconButton onClick={funcion}>
              <img src={imagen} className={classes.img} />
            </IconButton>
          </Grid>
          {/** Descripcion */}
          <Grid item xs={10} md={10} lg={4}>
            {tipo == true ? (
              <Typography className={classes.subtitle}>{titulo}</Typography>
            ) : (
              <Typography className={classes.subtitle3}>{titulo}</Typography>
            )}
            <Typography className={classes.subtitle2}>{resumen}</Typography>
          </Grid>
          <Grid item xs={false} md={false} lg={1} />
          {/** Burbuja en posicion de movil */}
          {source ? null : (
            <Grid item xs={12} md={0} lg={0}>
               {estado?<Burbuja descripcion={descripcion} />:null}
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default valor;
