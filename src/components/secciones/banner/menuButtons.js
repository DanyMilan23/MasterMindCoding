import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//Componentes de listas
import Button from '@material-ui/core/Button';
import Constants from '../../../config/constants'

const useStyles = makeStyles((theme) => ({
  boton: {
    marginLeft:'10px'
  },
  container:{
    paddingRight:'8vw'
  }
}));


export default function MenuAppBar() {
    const classes = useStyles();
    return( 
      <div className={classes.container}>
        <Button color="primary" className={classes.boton}>{Constants.STRINGS.SOLUTIONS}</Button>
        <Button color="primary" className={classes.boton}>{Constants.STRINGS.INDUSTRY}</Button>
        <Button color="primary" className={classes.boton}>{Constants.STRINGS.TECHNOLOGY}</Button>
        <Button color="primary" className={classes.boton}>{Constants.STRINGS.CAREERS}</Button>
        <Button color="primary" className={classes.boton}>{Constants.STRINGS.ABOUT}</Button>
        <Button color="primary" className={classes.boton}>{Constants.STRINGS.CONTACT}</Button>
      </div>
    );
}
