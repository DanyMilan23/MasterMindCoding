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
    paddingTop: "130px",
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
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "25px",
        lineHeight: "26px",
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
       fontSize: "18px",
      lineHeight: "24px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "36px",
        lineHeight: "48px",
    },
  },
  text: {
    paddingTop: "70px",
    //fontSize: "32px",
    lineHeight: "45px",
    fontWeight: 400,
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    paddingLeft: "20px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "10px",
        fontSize: "10px",
        lineHeight: "13px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
        lineHeight: "23px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        lineHeight: "23px",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "32px",
        lineHeight: "45px",
    },
  },
  subtext: {
    //fontSize: "30px",
    lineHeight: "47px",
    color: "#171c48",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    paddingLeft: "70px",
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
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "15px",
       lineHeight: "23px",
        paddingBottom:'60px',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "30px",
        lineHeight: "47px",
        paddingBottom:'60px',
    },
  },
  div: {
    backgroundImage:
      "url(" + `${require("../../../../public/plantilla2.png")}` + ")",
    width: '100vw',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
        height: 'auto',
    },
    [theme.breakpoints.up("sm")]: {
        height: 'auto',
    },
    [theme.breakpoints.up("md")]: {
        height: 'auto',
    },
    [theme.breakpoints.up("lg")]: {
        height: "auto",
    },
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
              <Typography className={classes.title}>SOLUTIONS</Typography>
              <Typography className={classes.subTitle}>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item xs={1} md={1} lg={1} />
            <Grid item xs={6} md={6} lg={6}>
              <Typography className={classes.text}>
                <b>
                  We provide full cycle product development, including design,
                  implementation, QA and production deployment.
                  <br />
                  Our partners trust us to build custom Tech solutions for:{" "}
                </b>
              </Typography>
              <Typography className={classes.subtext}>
                • Architectural Design. <br />
                • Software Product Development. <br />
                • Product Design Sprint. <br />
                • Quality assurance on development. <br />
                • Test automation during and post development phase. <br />
                • Software support and maintenance.
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default tipo2;
