import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Item from "./technology/tech";

const useStyles = makeStyles((theme) => ({
  carousel: {
    paddingLeft: 56,
    paddingRight: 56,
    width: "100vw",
    height: "auto",
    backgroundColor: "#171c48",
    paddingBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 15,
      width: "100vw",
      height: "auto",
      paddingBottom: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100vw",
      height: "auto",
    },
  },
  title: {
    paddingTop: "80px",
    paddingBottom: "50px",
    fontSize: "60px",
    lineHeight: "20px",
    color: "#ffffff",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      paddingTop: "35px",
      paddingBottom: "10px",
    },
  },
}));

const carouseltech = (props) => {
  const classes = useStyles();
  return (
    <Container infinite className={classes.carousel} maxWidth>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/**titulo */}
        <Grid item xs={12} md={12} lg={12}>
          <Typography className={classes.title}>TECHNOLOGY</Typography>
        </Grid>
        {/**Carousel */}
        <Grid item xs={0} md={0} lg={1} />
        <Grid item xs={12} md={12} lg={10}>
          <Carousel
            slidesPerPage={7}
            arrows
            infinite
            arrowLeft={<img src='arrow-left.png' style={{height:'40px', width:'50px'}}/>}
            arrowRight={<img src='arrow-right.png' style={{height:'40px', width:'50px'}}/>}
            addArrowClickHandler
            breakpoints={{
                415: {
                slidesPerPage: 5,
                arrows: true
                },
                825: {
                slidesPerPage: 7,
                arrows: true
                },
                1025: {
                slidesPerPage: 7,
                arrows: true
                }
            }}
          >
            <Item imagen={"angular.png"} />
            <Item imagen={"react.png"} />
            <Item imagen={"vue.png"} />
            <Item imagen={"java.png"} />
            <Item imagen={"spring.png"} />
            <Item imagen={"mysql.png"} />
            <Item imagen={"oracle.png"} />
            <Item imagen={"posgress.png"} />
            <Item imagen={"aws.png"} />
            <Item imagen={"jenkins.png"} />
            <Item imagen={"html.png"} />
            <Item imagen={"js.png"} />
            <Item imagen={"node.png"} />
            <Item imagen={"pentaho.png"} />
            <Item imagen={"tableu.png"} />
            <Item imagen={"git.png"} />
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default carouseltech;
