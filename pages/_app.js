import React,{ useEffect} from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/config/theme";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../public/css/arrows.css"
import "@brainhubeu/react-carousel/lib/style.css";
const MyApp = props => {
  
  const { Component, pageProps } = props;
  useEffect(() => { 
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  })
  return (      
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}
export default MyApp;
