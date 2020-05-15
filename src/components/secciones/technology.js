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
  { width: 1025, itemsToShow: 7 }
];

const useStyles = makeStyles(theme => ({
    carousel:{
        paddingLeft:56,
        paddingRight:56,
        width: '100vw',
        height: 'auto',
        backgroundColor: '#171c48',
        paddingBottom:'50px',
        [theme.breakpoints.down("sm")]: {
            width: '100vw',
            height: 'auto',
        },
        [theme.breakpoints.up("sm")]: {
            width: '100vw',
            height: 'auto',
        },
    },
    title:{
        paddingTop:'70px',
        paddingBottom:'50px',
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
    },
    i1:{
       paddingTop:15,
       paddingLeft:15,
    },
    i2:{
       paddingTop:12,
       paddingLeft:18,
    },
    i3:{
       paddingTop:23,
       paddingLeft:18,
    },
     i4:{
       paddingTop:12,
       paddingLeft:25,
    },
     i5:{
       paddingTop:22,
       paddingLeft:18,
    },
     i6:{
       paddingTop:28,
       paddingLeft:18,
    },
     i7:{
       paddingTop:25,
       paddingLeft:22,
    },
     i8:{
       paddingTop:25,
       paddingLeft:20,
    },
     i9:{
       paddingTop:30,
       paddingLeft:12,
    },
    
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
                            <Item imagen={'angular.png'} estilos={classes.i1}/>
                            <Item imagen={'react.png'} estilos={classes.i2}/>
                            <Item imagen={'vue.png'} estilos={classes.i3}/>
                            <Item imagen={'java.png'} estilos={classes.i4}/>
                            <Item imagen={'spring.png'} estilos={classes.i5}/>
                            <Item imagen={'mysql.png'} estilos={classes.i6}/>
                            <Item imagen={'oracle.png'} estilos={classes.i7}/>
                            <Item imagen={'poss.png'} estilos={classes.i8}/>
                            <Item imagen={'aws.png'} estilos={classes.i9}/>
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    );
};



export default technology;