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
  { width: 1, itemsToShow: 4 },
  { width: 415, itemsToShow: 6 },
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
        paddingBottom:'80px',
        [theme.breakpoints.down("sm")]: {
            paddingLeft:20,
            paddingRight:15,
            width: '100vw',
            height: 'auto',
            paddingBottom:'30px',
        },
        [theme.breakpoints.up("sm")]: {
            width: '100vw',
            height: 'auto',
        },
    },
    title:{
        paddingTop:'80px',
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
    
}))

const technology = props => {
     const classes = useStyles();
     const myArrow = ({ type, onClick })=>{
      const pointer = type === consts.PREV ? (<img src='arrow-left.png' style={{height:'40px', width:'50px'}}/>) : (<img src='arrow-right.png' style={{height:'40px', width:'50px'}}/>)
      return <Button onClick={onClick}>{pointer}</Button>
    }
    
    return (
        <div>
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
                    <Grid item xs={0} md={0} lg={1}/>
                    <Grid item xs={12} md={12} lg={10}>
                        <Carousel breakPoints={breakPoints} renderArrow={myArrow} pagination={false}>
                            <Item imagen={'angular.png'} />
                            <Item imagen={'react.png'}  />
                            <Item imagen={'vue.png'}/>
                            <Item imagen={'java.png'}/>
                            <Item imagen={'spring.png'} />
                            <Item imagen={'mysql.png'} />
                            <Item imagen={'oracle.png'} />
                            <Item imagen={'posgress.png'}/>
                            <Item imagen={'aws.png'}/>
                            <Item imagen={'jenkins.png'}/>
                            <Item imagen={'html.png'} />
                            <Item imagen={'js.png'} />
                            <Item imagen={'node.png'} />
                            <Item imagen={'pentaho.png'}/>
                            <Item imagen={'tableu.png'}/>
                            <Item imagen={'git.png'}/>
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    );
};



export default technology;