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
      width:30,
      height:30,
  },
  root: {
    width: "100vw",
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

export default function DetailedExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.root}>
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
        <ExpansionPanelActions>
            <Button color="primary" fullWidth>{Constants.STRINGS.SOLUTIONS}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions>
            <Button color="primary" fullWidth>{Constants.STRINGS.INDUSTRY}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions>
            <Button color="primary" fullWidth>{Constants.STRINGS.TECHNOLOGY}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions>
            <Button color="primary" fullWidth>{Constants.STRINGS.CAREERS}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions>
            <Button color="primary" fullWidth>{Constants.STRINGS.ABOUT}</Button>
        </ExpansionPanelActions>
        <ExpansionPanelActions>
            <Button color="primary" fullWidth>{Constants.STRINGS.CONTACT}</Button>
        </ExpansionPanelActions>
        
        
      </ExpansionPanel>
    </div>
  );
}
