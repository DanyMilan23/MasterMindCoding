import React, { useState, useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  image: {
    //height: '30vh',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '35vh',
    },
     [theme.breakpoints.up('sm')]: {
      height: '40vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '87vh',
    },

  },
}));

export default () => {
  const classes = useStyles();

  return(
    <>
      <Carousel dynamicHeight={false} showThumbs={false} infiniteLoop={true} showStatus={false} interval={20000} dynamicHeight={true} autoPlay>
        <div>
          <img alt="" src="web.jpg" className={classes.image}/>  
        </div>
        <div>
          <img alt="" src="mobile.jpg" className={classes.image}/>
        </div>
        <div>
          <img alt="" src="qa.jpg" className={classes.image}/> 
        </div>
        <div>
          <img alt="" src="support.jpg" className={classes.image}/>
        </div>
      </Carousel>
    </>
  )
};
