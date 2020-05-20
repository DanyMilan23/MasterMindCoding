import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   img:{
        [theme.breakpoints.down("sm")]: {
            paddingTop:5,
            width:45,
            height:45,  
        },
        [theme.breakpoints.up("sm")]: {
            width:70,
            height:70,     
        },
        [theme.breakpoints.up("md")]: {
            width:100,
            height:100,
        },
        [theme.breakpoints.up("lg")]: {
            width:103,
            height:103,    
        },
   }
}))

const tech = ({imagen,estilos}) => {
    const classes = useStyles();
    return (
        <div>       
            <img src={imagen} className={classes.img}/>             
        </div>
    );
};

export default tech;