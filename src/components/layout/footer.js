import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Whyus from '../secciones/whyus'
import Techonology from '../secciones/technology';
import Misionvision from '../secciones/misionvision'
import Contact from '../secciones/contact'
import Minifooter from '../secciones/miniFooter'
import Ourwork from '../secciones/ourWork'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:'20px',
    flexDirection: 'column',
  },
}));

export default function StickyFooter({ref}) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={ref}>
      <footer>
        <Whyus/>
        <Techonology/>
        <Ourwork/>
        <Misionvision/>
        <Contact/>
        <Minifooter/>
      </footer>
    </div>
  );
}
