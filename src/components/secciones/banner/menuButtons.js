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

export default function MenuAppBar({f21,f22,f23,f24,f31,f32,f33,f34,f35,f36,f37,f38,f39,f41,f42,f43,f44,f45,f51,f52,f61,f62,f71,f72}) {
  const classes = useStyles();
  const [menu,setMenu]=useState({
    menu1:false,
    menu2:false,
    menu3:false,
    menu4:false,
  })
  return (
    <div className={classes.container}>
      <Solutions className={classes.boton} f21={f21} f22={f22} f23={f23} f24={f24}/>
      <Industry className={classes.boton}  f31={f31} f32={f32} f33={f33} f34={f34} f35={f35} f36={f36} f37={f37} f38={f38} f39={f39}/>
      <Technology className={classes.boton} f41={f41} f42={f42} f43={f43} f44={f44} f45={f45}/>
      <Careers className={classes.boton}  f51={f51} f52={f52}/>
      <About className={classes.boton} f61={f61} f62={f62}/>
      <Contact className={classes.boton} f71={f71} f72={f72}/>
    </div>
  );
}
