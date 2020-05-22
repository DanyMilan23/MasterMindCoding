import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "70px",
  },
  contText: {
    paddingLeft: "25px",
    width: "auto",
    height: "auto",
    backgroundColor: "#ffff",
  },
  title: {
    lineHeight: "52px",
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 900,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3vh",
      fontSize: "20px",
      lineHeight: "26px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px",
      lineHeight: "26px",
      paddingTop: "3vh",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
      lineHeight: "32px",
      paddingTop: "5vh",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "50px",
      lineHeight: "52px",
      paddingTop: "15vh",
    },
  },
  subTitle: {
    lineHeight: "48px",
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "right",
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
      lineHeight: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "27px",
      lineHeight: "24px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "36px",
      lineHeight: "48px",
    },
  },
  text: {
    lineHeight: "45px",
    fontWeight: 400,
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    paddingLeft: "40px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3vh",
      fontSize: "10px",
      lineHeight: "13px",
      paddingLeft: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
      lineHeight: "23px",
      paddingTop: "3vh",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      lineHeight: "23px",
      paddingTop: "5vh",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      lineHeight: "45px",
      paddingTop: "15vh",
    },
  },
  subtext: {
    lineHeight: "47px",
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    paddingLeft: "40px",
    //paddingBottom: "20px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "30px",
      fontSize: "10px",
      lineHeight: "13px",
      paddingBottom: "5vh",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "15px",
      lineHeight: "23px",
      paddingBottom: "7vh",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      lineHeight: "23px",
      paddingBottom: "10vh",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "34px",
      lineHeight: "47px",
      paddingBottom: "20vh",
    },
  },
  div: {
    backgroundImage:
      "url(" + `${require("../../../../public/plantilla1.png")}` + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
  },
}));

function tipo2({ title, titleDescription, text1, text2 }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>
        <Container maxWidth>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={4} md={4} lg={4}>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.subTitle}>
                {titleDescription}
              </Typography>
            </Grid>
            <Grid item xs={1} md={1} lg={1} />
            <Grid item xs={6} md={6} lg={6}>
              <Typography className={classes.text}>{text1}</Typography>
              <Typography className={classes.subtext}>{text2}</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default tipo2;
