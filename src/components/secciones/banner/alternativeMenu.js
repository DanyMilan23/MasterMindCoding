import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Constants from "../../../config/constants";

const useStyles = makeStyles((theme) => ({
  icon: {
    [theme.breakpoints.down("sm")]: {
      height: "6vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "8vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "6vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "6vh",
    },
    [theme.breakpoints.up("xl")]: {
      height: "10vh",
    },
  },
  image: {
    marginTop: 1,
    [theme.breakpoints.down("sm")]: {
      height: "5vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "5vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "5vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "5vh",
    },
    [theme.breakpoints.up("xl")]: {
      height: "10vh",
    },
  },
  linksContainer: {
    "justify-content": "left",
  },
  boton: {
    paddingTop: 0,
    paddingBottom: 0,
    height: "15px",
    fontSize: "10px",
  },
}));

export default function DetailedExpansionPanel({ funcion, scroll }) {
  const classes = useStyles();
  const [menu, setMenu] = useState({
    solutions: false,
    industry: false,
    technology: false,
    careers: false,
    about: false,
    contact: false,
  });

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<MenuIcon className={classes.icon} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <img
            src="logo-brand.png"
            className={classes.image}
            onClick={() => {
              funcion("home");
            }}
          />
        </ExpansionPanelSummary>
        {menu.solutions == false &&
        menu.industry == false &&
        menu.technology == false &&
        menu.careers == false &&
        menu.about == false &&
        menu.contact == false ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: true,
                    industry: false,
                    technology: false,
                    careers: false,
                    about: false,
                    contact: false,
                  });
                }}
              >
                {Constants.STRINGS.SOLUTIONS}
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: false,
                    industry: true,
                    technology: false,
                    careers: false,
                    about: false,
                    contact: false,
                  });
                }}
              >
                {Constants.STRINGS.INDUSTRY}
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: false,
                    industry: false,
                    technology: true,
                    careers: false,
                    about: false,
                    contact: false,
                  });
                }}
              >
                {Constants.STRINGS.TECHNOLOGY}
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: false,
                    industry: false,
                    technology: false,
                    careers: true,
                    about: false,
                    contact: false,
                  });
                }}
              >
                {Constants.STRINGS.CAREERS}
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: false,
                    industry: false,
                    technology: false,
                    careers: false,
                    about: true,
                    contact: false,
                  });
                }}
              >
                {Constants.STRINGS.ABOUT}
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: false,
                    industry: false,
                    technology: false,
                    careers: false,
                    about: false,
                    contact: true,
                  });
                }}
              >
                {Constants.STRINGS.CONTACT}
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*Sub Menus */}
        {/*Solutions */}
        {menu.solutions == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("staff");
                }}
              >
                IT Staff
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("assure");
                }}
              >
                Assurance
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("main");
                }}
              >
                Maintenance
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("dev");
                }}
              >
                Dev Ops
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*Industry */}
        {menu.industry == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("telecom");
                }}
              >
                Telecom
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("banking");
                }}
              >
                Banking & Finance
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("ecomerce");
                }}
              >
                E-Commerce
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("retail");
                }}
              >
                Retail & Logistics
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("emark");
                }}
              >
                E-Marketing
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("manu");
                }}
              >
                Manufacturing
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("health");
                }}
              >
                Health Care
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("energy");
                }}
              >
                Energy & Utilities
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("automotive");
                }}
              >
                Automotive
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*technology */}
        {menu.technology == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("web");
                }}
              >
                Web
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("java");
                }}
              >
                Java
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("mobile");
                }}
              >
                Mobile
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("database");
                }}
              >
                Database
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("others");
                }}
              >
                Others
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*Careers */}
        {menu.careers == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("life");
                }}
              >
                Life at MasterMind
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("jobs");
                }}
              >
                Jobs at MasterMind
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*about */}
        {menu.about == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("privacy");
                }}
              >
                Privacy Policy
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("whoweare");
                }}
              >
                Who we are,Our Values
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*contact */}
        {menu.contact == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  scroll();
                }}
              >
                Send us a Message
              </Button>
            </ExpansionPanelActions>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={() => {
                  funcion("request");
                }}
              >
                Request a Quote
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
        {/*back */}
        {menu.solutions == true ||
        menu.industry == true ||
        menu.technology == true ||
        menu.careers == true ||
        menu.about == true ||
        menu.contact == true ? (
          <div>
            <ExpansionPanelActions className={classes.linksContainer}>
              <Button
                color="primary"
                className={classes.boton}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu({
                    solutions: false,
                    industry: false,
                    technology: false,
                    careers: false,
                    about: false,
                    contact: false,
                  });
                }}
              >
                {"< Back"}
              </Button>
            </ExpansionPanelActions>
          </div>
        ) : null}
      </ExpansionPanel>
    </div>
  );
}
