import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//Componentes de listas
import Button from '@material-ui/core/Button';
import Constants from '../config/constants'

const useStyles = makeStyles((theme) => ({
  boton: {
    fontSize: '21px',
    lineHeight: '29px',
    color: '#171c48',
    fontFamily: 'Open Sans,sans-serif',
    fontWeight: 400,
  },
}));


export default function MenuAppBar() {
    const classes = useStyles();
    return( 
      <div>
        <Button color="primary">{Constants.STRINGS.SOLUTIONS}</Button>
        <Button color="primary">{Constants.STRINGS.INDUSTRY}</Button>
        <Button color="primary">{Constants.STRINGS.TECHNOLOGY}</Button>
        <Button color="primary">{Constants.STRINGS.CAREERS}</Button>
        <Button color="primary">{Constants.STRINGS.ABOUT}</Button>
        <Button color="primary">{Constants.STRINGS.CONTACT}</Button>
      </div>
    );
}
