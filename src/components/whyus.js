import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Router from 'next/router';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
//import Burbuja from './burbuja'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    fontSize: '60px',
    lineheight: '20px',
    color: '#171c48',
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
  },
  subtitle3:{
    paddingTop:70,
    paddingLeft:20,
    fontSize:'32px',
    lineHeight: '34px',
    color:'#171c48',
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing:"-1px",
  },
  subtitle:{
    paddingTop:15,
    paddingLeft:20,
    fontSize:'32px',
    lineHeight: '34px',
    color:'#171c48',
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing:"-1px",
  },
  subtitle2:{
    paddingLeft:20,
    width: '403px',
    height: '224px',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#17457f',
    fontFamily: "'Robot', sans-serif",
    fontWeight: 400,
    letterSpacing:"-1px",
    height:150,
  },
  img:{
    height:'18vh',
    width:'18vh',
  }
}));
const Whyus = () =>{
    const classes = useStyles();
    return(
        <>
            <Container maxWidth>
                <Grid container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
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
                         <Paper className={classes.paper} > 11 </Paper>
                    </Grid>
                    <Grid item xs={1}>
                         <Paper className={classes.paper} > 11 </Paper>
                    </Grid>
                    <Grid item xs={1}>
                         <Paper className={classes.paper} > 11 </Paper>
                    </Grid>
                    <Grid item xs={1}>
                         <Paper className={classes.paper} > 11 </Paper>
                    </Grid>
                    <Grid item xs={1}>
                         <Paper className={classes.paper} > 11 </Paper>
                    </Grid>
                    {/*Aqui van las 1eras letras */}
                    <Grid xs={12} md={12} lg={3}>
                        <Typography  className={classes.title} > Why us!?</Typography>
                    </Grid>
                    <Grid xs={0} md={0} lg={9}/>
                    {/*Espacio para el card */}
                    <Grid xs={0} md={0} lg={6}>
                     
                    </Grid>
                    {/**imagen */}
                    <Grid xs={0} md={0} lg={1}>
                        <IconButton>
                            <img src='capa1.png' className={classes.img}/>
                        </IconButton>
                    </Grid>
                    <Grid xs={10} md={10} lg={4}>
                         <Typography  className={classes.subtitle} >NEARSHORE ADVANTAGE</Typography>
                         <Typography  className={classes.subtitle2} >Can’t get any closer than nearshore. Hire highly talented engineers in time zones near to you.</Typography>
                    </Grid>
                    <Grid xs={0} md={0} lg={6}>
                        
                    </Grid>
                    {/**imagen */}
                    <Grid xs={0} md={0} lg={1}>
                        <IconButton>
                            <img src='capa2.png' className={classes.img}/>
                        </IconButton>
                    </Grid>
                    <Grid xs={10} md={10} lg={4}>
                         <Typography  className={classes.subtitle3} >COST ADVANTAGE</Typography>
                         <Typography  className={classes.subtitle2} >Best investment, best rates for software development.</Typography>
                    </Grid>
                    <Grid xs={0} md={0} lg={6}>
                        
                    </Grid>
                    {/**imagen */}
                    <Grid xs={0} md={0} lg={1}>
                        <IconButton>
                            <img src='capa3.png' className={classes.img}/>
                        </IconButton>
                    </Grid>
                    <Grid xs={10} md={10} lg={4}>
                         <Typography  className={classes.subtitle} >QUALITY & EFFICIENCY</Typography>
                         <Typography  className={classes.subtitle2} >We strive for high quality in every aspect of our work and relationship.</Typography>
                    </Grid>
                    <Grid xs={0} md={0} lg={6}>
                        
                    </Grid>
                    {/**imagen */}
                    <Grid xs={0} md={0} lg={1}>
                        <IconButton>
                            <img src='capa4.png' className={classes.img}/>
                        </IconButton>
                    </Grid>
                    <Grid xs={10} md={10} lg={4}>
                         <Typography  className={classes.subtitle3} >OUR PEOPLE</Typography>
                         <Typography  className={classes.subtitle2} >Expand your team with seasoned professionals.</Typography>
                    </Grid>
                    <Grid xs={0} md={0} lg={6}>
                        
                    </Grid>
                    {/**imagen */}
                    <Grid xs={0} md={0} lg={1}>
                        <IconButton>
                            <img src='capa5.png' className={classes.img}/>
                        </IconButton>
                    </Grid>
                    <Grid xs={10} md={10} lg={4}>
                         <Typography  className={classes.subtitle} >CONFIDENDIALITY POLICIES</Typography>
                         <Typography  className={classes.subtitle2} >We guarantee the confidendiality and secure use of any sensitive information of your business.</Typography>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default Whyus;