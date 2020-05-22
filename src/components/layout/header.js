import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//Router with next
import Link from "next/link";
import Router from "next/router";
//Menu
import MenuButton from "../secciones/banner/menuButtons";
import AlternativeMenu from '../secciones/banner/alternativeMenu'
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    paddingTop:10 ,
    paddingBottom:10,
    [theme.breakpoints.down('sm')]: {
      height: '8vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '10vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '8vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '10vh',
    },
    [theme.breakpoints.up('xl')]: {
      height: '10vh',
    },
   
  },
}));

export default function MenuAppBar({f1 ,f21,f22,f23,f24,f31,f32,f33,f34,f35,f36,f37,f38,f39,f41,f42,f43,f44,f45,f51,f52,f61,f62,f71,f72}) {
  const classes = useStyles();
  //states
  const [source, setSource] = useState(false);
  //MediaQuery
  const matches = useMediaQuery("(min-width:1280px)");
  useEffect(() => {
    setSource(matches);
  }, [matches]);
  return (
    <div>
      {source ? (
      <AppBar position="sticky" color="background">
        <Toolbar className={classes.root}>
            <img
            src="logo-brand.png"
            className={classes.image}
            onClick={f1}
          />
          <MenuButton 
            f21={f21}
            f22={f22}
            f23={f23}
            f24={f24}
            f31={f31}
            f32={f32}
            f33={f33}
            f34={f34}
            f35={f35}
            f36={f36}
            f37={f37}
            f38={f38}
            f39={f39}
            f41={f41}
            f42={f42}
            f43={f43}
            f44={f44}
            f45={f45}
            f51={f51}
            f52={f52}
            f61={f61}
            f62={f62}
            f71={f71}
            f72={f72}
          />
        </Toolbar>
      </AppBar>):(<AlternativeMenu/>)}   
    </div>
  );
}
