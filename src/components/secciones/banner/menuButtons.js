import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//Componentes de listas
import Button from "@material-ui/core/Button";
import Constants from "../../../config/constants";
import Solutions from './subSolutions'
import About from './subabout'
import Industry from './subindu'
import Technology from './subtech';

const useStyles = makeStyles((theme) => ({
  boton: {
    marginLeft: "10px",
  },
  container: {
    paddingRight: "7vw",
    display:'inline-flex'
  },
}));

export default function MenuAppBar({f2,f3}) {
  const classes = useStyles();
  const [menu,setMenu]=useState({
    menu1:false,
    menu2:false,
    menu3:false,
    menu4:false,
  })
  return (
    <div className={classes.container}>
      <Solutions className={classes.boton} funcion={f2}/>
      <Industry className={classes.boton} funcion={f3}/>
      <Technology className={classes.boton}/>
      <Button color="primary" className={classes.boton}>
        {Constants.STRINGS.CAREERS}
      </Button>
      <About className={classes.boton}/>
      <Button color="primary" className={classes.boton}>
        {Constants.STRINGS.CONTACT}
      </Button>
    </div>
  );
}
