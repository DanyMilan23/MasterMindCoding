import React, { useState, useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  image: {
    //height: '30vh',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '30vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '30vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '90vh',
    },
  },
}));

export default () => {
  const classes = useStyles();

  return(
    <>
      <Carousel dynamicHeight={false} showThumbs={false} infiniteLoop={true} showStatus={false} interval={20000} dynamicHeight={true} autoPlay>
        <div>
          <img alt="" src="web_text.jpg" className={classes.image}/>  
        </div>
        <div>
          <img alt="" src="/mobile_text.jpg" className={classes.image}/>
        </div>
        <div>
          <img alt="" src="qa_text.jpg" className={classes.image}/> 
        </div>
        <div>
          <img alt="" src="support_text.jpg" className={classes.image}/>
        </div>
      </Carousel>
    </>
  )
};
