import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//components of carousel
import Carousel,{ consts }  from "react-elastic-carousel";
import Item from "./technology/tech";
import Button from '@material-ui/core/Button';

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 415, itemsToShow: 4 },
  { width: 825, itemsToShow: 7},
  { width: 1025, itemsToShow: 4 }
];

const useStyles = makeStyles(theme => ({
    carousel:{
        width: '100vw',
        height: '60vh',
        backgroundColor: '#171c48',
        [theme.breakpoints.down("sm")]: {
            width: '100vw',
            height: '35vh',
        },
        [theme.breakpoints.up("sm")]: {
            width: '100vw',
            height: '70vh',
        },
    },
    title:{
        paddingTop:'70px',
        paddingBottom:'70px',
        fontSize: '60px',
        lineHeight: '20px',
        color: '#ffffff',
        fontFamily: "'Robot', sans-serif",
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
            paddingTop:'35px',
            paddingBottom:'10px',
        },
    }
}))

const technology = props => {
     const classes = useStyles();
     const myArrow = ({ type, onClick })=>{
      const pointer = type === consts.PREV ? (<img src='arrow-left.png' style={{height:'70px', width:'30px'}}/>) : (<img src='arrow-right.png' style={{height:'70px', width:'30px'}}/>)
      return <Button onClick={onClick}>{pointer}</Button>
    }
    return (
        <div>
            <Container className={classes.carousel} maxWidth>
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
                    <Grid item xs={0} md={0} lg={1}/>
                    <Grid item xs={12} md={10} lg={10}>
                        <Carousel breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
                            <Item imagen={'angular.png'}/>
                            <Item imagen={'react.png'}/>
                            <Item imagen={'vue.png'}/>
                            <Item imagen={'java.png'}/>
                            <Item imagen={'spring.png'}/>
                            <Item imagen={'mysql.png'}/>
                            <Item imagen={'oracle.png'}/>
                            <Item imagen={'poss.png'}/>
                            <Item imagen={'aws.png'}/>
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    );
};



export default technology;