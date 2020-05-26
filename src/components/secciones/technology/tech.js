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
            width:60,
            height:60,     
        },
        [theme.breakpoints.up("md")]: {
            width:75,
            height:75,
        },
        [theme.breakpoints.up("lg")]: {
            width:90,
            height:90,    
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