import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Ayuda from "../../grid";

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
    paddingTop: "100px",
    lineHeight: "52px",
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 900,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "30px",
        fontSize: "20px",
        lineHeight: "26px",
    },
    [theme.breakpoints.up("sm")]: {
       fontSize: "25px",
        lineHeight: "26px",
        paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "35px",
        lineHeight: "32px",
        paddingTop: "100px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "50px",
         lineHeight: "52px",
    },
  },
  subTitle: {
    //fontSize: "36px",
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
    paddingTop: "100px",
    //fontSize: "32px",
    lineHeight: "45px",
    fontWeight: 400,
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    paddingLeft: "40px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "10px",
        fontSize: "10px",
        lineHeight: "13px",
        paddingLeft: "30px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
        lineHeight: "23px",
        paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "25px",
        lineHeight: "23px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "32px",
        lineHeight: "45px",
    },
  },
  subtext: {
    lineHeight: "47px",
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    paddingLeft: "40px",
    paddingBottom: "20px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "30px",
        fontSize: "10px",
        lineHeight: "13px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "15px",
        lineHeight: "23px",
        paddingBottom:'170px',
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "25px",
       lineHeight: "23px",
       paddingBottom:'170px',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "30px",
        lineHeight: "47px",
        paddingBottom:'170px',
    },
  },
  div: {
    backgroundImage:
      "url(" + `${require("../../../../public/plantilla1.png")}` + ")",
    width: '100vw',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 'auto',
  },
}));

function tipo2(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div} >
        <Container maxWidth>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={4} md={4} lg={4}>
              <Typography className={classes.title}>INDUSTRY</Typography>
              <Typography className={classes.subTitle}>
                Telecom
              </Typography>
            </Grid>
            <Grid item xs={1} md={1} lg={1} />
            <Grid item xs={6} md={6} lg={6}>
              <Typography className={classes.text}>
                The telecom industry involves
                communications companies and
                providers of mobile devices, mobile
                applications as well as Internet and
                video streaming services.
              </Typography>
              <Typography className={classes.subtext}>
                Our team of software developers has taken
                on a range of telecommunication software
                projects with great success. We are an
                expert team ready for any telecom software
                project. 
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default tipo2;
