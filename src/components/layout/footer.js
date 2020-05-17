import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Whyus from '../secciones/whyus'
import Techonology from '../secciones/technology';
//import Valores from '../valores'
import Constants from '../../config/constants'
import Ourwork from '../secciones/ourWork'
import Misionvision from '../secciones/misionvision'
import Contact from '../secciones/contact'
import Minifooter from '../secciones/miniFooter'
import Ayuda from '../grid'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
        <Link color="inherit" href="https://wa.me/59167593666">
            Code-Group
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:'20px',
    flexDirection: 'column',
    minHeight: '10vh',
    //alignItems: 'center',
  },
  imagen:{
    alignItems:'center',
    width:'100vw',
    height:'70vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Quality and innovation for our users</Typography>
          <Copyright />
        </Container>
      </footer>*/}
      <footer>
        {/*<Whyus/>*/}
        <Ayuda/>
        <Whyus/>
        <Techonology/>
        <Ourwork/>
        <Misionvision/>
        <Contact/>
        <Minifooter/>
        <img src='wip2.jpg' className={classes.imagen}/>
        
      </footer>
    </div>
  );
}
