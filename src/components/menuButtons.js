import React, { useState, useContext, useEffect } from "react";
//Componentes de listas
import Button from '@material-ui/core/Button';
import Constants from '../config/constants'

export default function MenuAppBar() {
    return( 
      <div>
        <Button color="primary">{Constants.STRINGS.HOME}</Button>
        <Button color="primary">{Constants.STRINGS.INDUSTRY}</Button>
        <Button color="primary">{Constants.STRINGS.TECHNOLOGY}</Button>
        <Button color="primary">{Constants.STRINGS.CAREERS}</Button>
        <Button color="primary">{Constants.STRINGS.ABOUT}</Button>
        <Button color="primary">{Constants.STRINGS.CONTACT}</Button>
      </div>
    );
}
