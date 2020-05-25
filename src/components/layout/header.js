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

export default function MenuAppBar({funcion,scroll}) {
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
            onClick={()=>{funcion('home')}}
          />
          <MenuButton 
            funcion={funcion}
            scroll={scroll}
          />
        </Toolbar>
      </AppBar>):(<AlternativeMenu/>)}   
    </div>
  );
}
