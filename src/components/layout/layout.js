import React,{ useRef, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import Whyus from '../secciones/whyus'
import Techonology from '../secciones/technology';
import Misionvision from '../secciones/misionvision'
import Contact from '../secciones/contact'
import Minifooter from '../secciones/miniFooter'
import Ourwork from '../secciones/ourWork'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const scrollToRef2 = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const useStyles = makeStyles((theme) => ({
    main:{
        paddingTop:1,
        [theme.breakpoints.up("xl")]: {
            paddingTop:'10vh'
        },
        
    }
}))

const Layout = props => {
    const classes = useStyles();
    const myRef = useRef(null)
    const myRef2 = useRef(null)

    const executeScroll = () => scrollToRef(myRef)
    const executeScroll2 = () => scrollToRef(myRef2)
  

    return ( 
        <>
            <Head>
                <title>Master Mind Coding LLC.</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
            </Head>
            <Header 
                funcion={props.funcion}
                scroll={executeScroll}
                scroll2={executeScroll2}
            />
            <main  className={classes.main} ref={myRef2}>
                {props.children}
            </main>
            <Whyus/>
            <Techonology/>
            <Ourwork/>
            <Misionvision/>
            <div ref={myRef}>
                <Contact/>
            </div>
            <Minifooter/>      
        </>
     );
}
 
export default Layout;