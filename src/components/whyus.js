import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Router from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
//import Burbuja from './burbuja'
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
    height: "224px",
    // fontSize: "16px",
    lineHeight: "20px",
    color: "#17457f",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 400,
    letterSpacing: "-1px",
    height: 40,
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
  },
  popover: {
    borderRadius: "10px ! important",
  },
}));
const Whyus = () => {
  const classes = useStyles();
  const [capa1, setCapa1] = React.useState(false);
  const [capa2, setCapa2] = React.useState(false);
  const [capa3, setCapa3] = React.useState(false);
  const [capa4, setCapa4] = React.useState(false);
  const [capa5, setCapa5] = React.useState(false);
  return (
    <>
      <Container maxWidth>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}> 11 </Paper>
          </Grid>
          {/*Aqui van las 1eras letras */}
          <Grid xs={12} md={6} lg={4}>
            <Typography className={classes.title}> Why us?</Typography>
          </Grid>
          <Grid xs={0} md={6} lg={8} />
          {/*Espacio para el card */}
          <Grid xs={0} md={6} lg={6} />
          {/**imagen */}
          <Grid xs={2} md={1} lg={1}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton id="capa1" {...bindTrigger(popupState)}>
                    <img src="capa1.png" className={classes.img} />
                  </IconButton>
                  <Popover
                    id="capa1"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    style={{
                      borderRadius: 20,
                    }}
                  >
                    <Typography className={classes.burbuja}>
                      Our geographical proximity is a Huge plus for your Agile
                      Software Development, we ensure successful software
                      development project based on efficient communication
                      between teams and customers.
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
          {/**Titulo y descripcion */}
          <Grid xs={10} md={4} lg={4}>
            <Typography className={classes.subtitle}>
              NEARSHORE ADVANTAGE
            </Typography>
            <Typography className={classes.subtitle2}>
              Can’t get any closer than nearshore. Hire highly talented
              engineers in time zones near to you.
            </Typography>
          </Grid>
          <Grid xs={0} md={6} lg={6}></Grid>
          {/**imagen */}
          <Grid xs={2} md={1} lg={1}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton id="capa1" {...bindTrigger(popupState)}>
                    <img src="capa2.png" className={classes.img} />
                  </IconButton>
                  <Popover
                    id="capa1"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    className={classes.popover}
                  >
                    <Typography className={classes.burbuja}>
                      The company offers to our customers the best rates and the
                      ideal environment for successful projects. We provide
                      really competitive rates and discounts for all our
                      contracts. We also have several customer retention
                      strategies that will keep you satisfied with us.
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
          <Grid xs={10} md={4} lg={4}>
            <Typography className={classes.subtitle3}>
              COST ADVANTAGE
            </Typography>
            <Typography className={classes.subtitle2}>
              Best investment, best rates for software development.
            </Typography>
          </Grid>
          <Grid xs={0} md={6} lg={6}></Grid>
          {/**imagen */}
          <Grid xs={2} md={1} lg={1}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton id="capa1" {...bindTrigger(popupState)}>
                    <img src="capa3.png" className={classes.img} />
                  </IconButton>
                  <Popover
                    id="capa1"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    className={classes.popover}
                  >
                    <Typography className={classes.burbuja}>
                      Our company values and promotes smart work and continuous
                      improvement in order to provide high quality in every
                      process and product. Our teams apply high quality coding
                      standards and advocate the use of agile methodologies in
                      order to ensure the quality of every delivery.
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
          <Grid xs={10} md={4} lg={4}>
            <Typography className={classes.subtitle}>
              QUALITY & EFFICIENCY
            </Typography>
            <Typography className={classes.subtitle2}>
              We strive for high quality in every aspect of our work and
              relationship.
            </Typography>
          </Grid>
          <Grid xs={0} md={6} lg={6}></Grid>
          {/**imagen */}
          <Grid xs={2} md={1} lg={1}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton id="capa1" {...bindTrigger(popupState)}>
                    <img src="capa4.png" className={classes.img} />
                  </IconButton>
                  <Popover
                    id="capa1"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    className={classes.popover}
                  >
                    <Typography className={classes.burbuja}>
                      Confidentiality & Intellectual Property Policies Doing
                      Business with MASTERMIND is the same as with any other US
                      based company. We ensure confidentiality and proper use of
                      your information through the following policies: As a US
                      based company all customer’s agreement are US Contracts.
                      Your intellectual property is protected by documented,
                      comprehensive levels of physical agreements. All employees
                      are subject to strict IP Protection and Confidentiality
                      Policies enforced by NDAs.
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
          <Grid xs={10} md={4} lg={4}>
            <Typography className={classes.subtitle3}>OUR PEOPLE</Typography>
            <Typography className={classes.subtitle2}>
              Expand your team with seasoned professionals.
            </Typography>
          </Grid>
          <Grid xs={0} md={6} lg={6}></Grid>
          {/**imagen */}
          <Grid xs={2} md={1} lg={1}>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <IconButton id="capa1" {...bindTrigger(popupState)}>
                    <img src="capa5.png" className={classes.img} />
                  </IconButton>
                  <Popover
                    id="capa1"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    className={classes.popover}
                  >
                    <Typography className={classes.burbuja}>
                      Our developers are carefully selected and trained with the
                      goal of improving the learning curve process. We Hire
                      doers We Hire people you can trust We also take into
                      account that hiring Good writers and communicators are
                      critical for the business success We keep growing the
                      skillset of our developers through the company’s training
                      plan which matches the projects requirements and
                      employee’s potential.
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Grid>
          <Grid xs={10} md={4} lg={4}>
            <Typography className={classes.subtitle}>
              CONFIDENDIALITY POLICIES
            </Typography>
            <Typography className={classes.subtitle2}>
              We guarantee the confidendiality and secure use of any sensitive
              information of your business.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Whyus;
