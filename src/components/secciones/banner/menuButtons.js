import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//Componentes de listas
import Button from "@material-ui/core/Button";
import Constants from "../../../config/constants";
import Solutions from './subSolutions'
import About from './subabout'
import Industry from './subindu'
import Technology from './subtech'
import Contact from './subContact'
import Careers from './subCareers'

const useStyles = makeStyles((theme) => ({
  boton: {
    marginLeft: "10px",
  },
  container: {
    paddingRight: "7vw",
    display:'inline-flex'
  },
}));

export default function MenuAppBar({funcion}) {
  const classes = useStyles();
  const [menu,setMenu]=useState({
    menu1:false,
    menu2:false,
    menu3:false,
    menu4:false,
  })
  return (
    <div className={classes.container}>
      <Solutions className={classes.boton} funcion={funcion}/>
      <Industry className={classes.boton}  funcion={funcion}/>
      <Technology className={classes.boton} funcion={funcion}/>
      <Careers className={classes.boton}  funcion={funcion}/>
      <About className={classes.boton} funcion={funcion}/>
      <Contact className={classes.boton} funcion={funcion}/>
    </div>
  );
}
