import React, { useState, useContext, useEffect } from "react";
//Componentes de listas
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//routeo con next js
import Link from "next/link";
import Constants from '../config/constants';

export default function MenuAppBar() {
    return( 
      <List>
        <Link href="/">
          <ListItem button key="Test">
            <ListItemText primary={Constants.STRINGS.HOME} />
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button key="Test">
            <ListItemText primary={Constants.STRINGS.INDUSTRY} />
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button key="Test">
            <ListItemText primary={Constants.STRINGS.TECHNOLOGY} />
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button key="Test">
            <ListItemText primary={Constants.STRINGS.CAREERS} />
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button key="Test">
            <ListItemText primary={Constants.STRINGS.ABOUT} />
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem button key="Test">     
            <ListItemText primary={Constants.STRINGS.CONTACT} />
          </ListItem>
        </Link>
      </List>
    );
}
