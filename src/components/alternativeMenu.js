import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from "@material-ui/core/Button";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from '@material-ui/icons/Menu';
import Constants from '../config/constants'

const useStyles = makeStyles(theme => ({
  icon:{
    [theme.breakpoints.down('sm')]: {
      height: '2vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('xl')]: {
      height: '10vh',
    },
  },
   image: {
    marginTop:1,
    [theme.breakpoints.down('sm')]: {
      height: '3vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '6vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('xl')]: {
      height: '10vh',
    },

  },
  boton:{
    paddingTop:0,
    paddingBottom:0,
    height:'15px',
    fontSize:'10px',
  },
}));

export default function DetailedExpansionPanel() {
  const classes = useStyles();

  return (
    <div>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<MenuIcon className={classes.icon} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
            <img
            src="logo-brand.png"
            className={classes.image}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelActions >
            <Button color="primary" className={classes.boton} fullWidth>{Constants.STRINGS.SOLUTIONS}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions >
            <Button color="primary" className={classes.boton} fullWidth>{Constants.STRINGS.INDUSTRY}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions >
            <Button color="primary" className={classes.boton} fullWidth>{Constants.STRINGS.TECHNOLOGY}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions >
            <Button color="primary" className={classes.boton} fullWidth>{Constants.STRINGS.CAREERS}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions>
            <Button color="primary" className={classes.boton} fullWidth>{Constants.STRINGS.ABOUT}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions >
            <Button color="primary" className={classes.boton} fullWidth>{Constants.STRINGS.CONTACT}</Button>
        </ExpansionPanelActions>   
      </ExpansionPanel>
    </div>
  );
}
