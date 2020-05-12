import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//Componentes de listas
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//Iconos
import MoreIcon from "@material-ui/icons/MoreVert";
//Router with next
import Link from "next/link";
import Router from "next/router";
//Menu
import Menu from "../menuList";
import MenuButton from "../menuButtons";
import Test from '../alternativeMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    //height: '30vh',
    
    paddingTop:10 ,
    paddingBottom:10,
    [theme.breakpoints.down('sm')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '10vh',
    },
    [theme.breakpoints.down('lg')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '10vh',
    },

  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  //states
  const [source, setSource] = useState(false);
  const [menu, setmenu] = React.useState({
    right: false,
  });
  //MediaQuery
  const matches = useMediaQuery("(min-width:1280px)");
  useEffect(() => {
    setSource(matches);
  }, [matches]);
  //funcion de activacion del slide
  const toggleDrawer = (side, open) => (event) => {
    setmenu({ ...menu, [side]: open });
  };
  const MenuList = (tipo) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <Menu />
    </div>
  );
  return (
    <div>
      <AppBar position="static" color="background">
        <Toolbar className={classes.root}>
          <img
            src="logo-brand.png"
            className={classes.image}
          />
          {source ? (
            <MenuButton />
          ) : (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
              >
                <MoreIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={menu.right} onClose={toggleDrawer("right", false)}>
        {MenuList()}
      </Drawer>
    </div>
  );
}
