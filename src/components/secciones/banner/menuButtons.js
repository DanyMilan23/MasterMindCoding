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

export default function MenuAppBar({funcion,scroll,scroll2}) {
  const classes = useStyles();
  const [menu,setMenu]=useState({
    menu1:false,
    menu2:false,
    menu3:false,
    menu4:false,
  })
  return (
    <div className={classes.container}>
      <Solutions className={classes.boton} funcion={funcion} scroll={scroll2}/>
      <Industry className={classes.boton}  funcion={funcion} scroll={scroll2}/>
      <Technology className={classes.boton} funcion={funcion} scroll={scroll2}/>
      <Careers className={classes.boton}  funcion={funcion} scroll={scroll2}/>
      <About className={classes.boton} funcion={funcion} scroll={scroll2}/>
      <Contact className={classes.boton} funcion={funcion} scroll={scroll} scroll2={scroll2}/>
    </div>
  );
}
