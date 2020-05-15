import React, { useState, useEffect }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
   title: {
    
    lineheight: "20px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
      paddingTop:30
    },
  },
  img:{
    height:'auto',
    
    [theme.breakpoints.down("sm")]: {
        width:'40vw',
        paddingBottom:15,
    },
    [theme.breakpoints.up("sm")]: {
        width:'40vw',
        paddingBottom:35,
    },
    [theme.breakpoints.up("md")]: {
        width:'45vw',
        paddingBottom:70,
    },
    [theme.breakpoints.up("lg")]: {
        width:'45vw',
        paddingBottom:70,
    },
  },
  subtitle:{
    width: 'auto',
    //height: '377px',
    lineHeight: '20px',
    color: '#17457f',
    fontFamily:  "'Robot', sans-serif",
    fontWeight: 500,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: '10px',
      fontSize: "6px",
       paddingTop:10,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop:25,
      fontSize: "12px",
       lineHeight: '20px',
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
      paddingTop:35,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      paddingTop:60,
    },
  },
  subtitle2:{
    width: 'auto',
    //height: '377px',
    fontSize: '18px',
    lineHeight: '20px',
    color: '#17457f',
    fontFamily:  "'Robot', sans-serif",
    fontWeight: 500,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      lineHeight: '10px',
    },
    [theme.breakpoints.up("sm")]: {
        paddingTop:1,
        fontSize: "12px",
       lineHeight: '20px',
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "12px",
      paddingTop:5,
      
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      paddingTop:30,
    },
  },
  description:{

  },
 
 
}));
const ourWork = () => {
    const classes = useStyles();
    //states
    const [source, setSource] = useState(false);
    //MediaQuery
    const matches = useMediaQuery("(min-width:1280px)");
    useEffect(() => {
        setSource(matches);
    }, [matches]);
    return (
        <>
        <Container maxWidth>
        {/**titulo */}
            <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
                
                <Grid item xs={12} md={11} lg={12}>
                    <Typography className={classes.title}>OUR WORK</Typography>
                </Grid>
                {/**seccion */}
                 {source ? <Grid item md={1} lg={1} /> : null}
                 
                <Grid item xs={6} md={4} lg={4}>
                    <Typography className={classes.subtitle}><b>MASTERMIND has joined up with a telecommunications
                    company which provides voice, data and TV services.
                    Such a wide service.</b>
                    <br/>
                    {source ?  <br/> : null}
                    Portfolio means a large amount of data that needs to be
                    processed and analyzed. MASTERMIND has developed an
                    efficient and user-friendly solution that collects data from
                    various platforms, processes, and analyzes it, to generate
                    management reports in real-time.
                    <br/>
                     {source ?  <br/> : null}
                    The key to this successful partnership was great
                    communication between teams, the processes, and
                    methodology implemented that drives project growth and
                    extended the partnership for more than three years.
                    </Typography >           
                </Grid>
                  {source ? <Grid item md={1} lg={1} /> : null}
                <Grid item xs={6} md={6} lg={6}>
                    <img src='wu1.jpg' className={classes.img}/>
                </Grid>
                
                {/**2da imagen */}
                <Grid item xs={6} md={6} lg={6}>
                    <img src='wu2.jpg' className={classes.img}/>
                </Grid>
                 {source ? <Grid item md={1} lg={1} /> : null}
                <Grid item xs={6} md={4} lg={4}>
                    <Typography className={classes.subtitle}>
                    <b>A big Leading Physical Therapy Software company based
                    in Phoenix, Arizona trusts MASTERMIND team with the
                    development & QA of their website and core platforms</b>, to
                    ensure that they have the highest quality release after
                    release an to got a more efficient platform implemented
                    with the latest technologies.
                    <br/>
                    {source ?  <br/> : null}
                    As a result, The Physical Therapy Software company
                    improve His KPI of client retention, while optimizing User
                    Experience and prioritizing cybersecurity.

                    </Typography >           
                </Grid>
                 {source ? <Grid item md={1} lg={1} /> : null}
                 {/**3er imagen */}
                 {source ? <Grid item md={1} lg={1} /> : null}
                <Grid item xs={6} md={4} lg={4}>
                    <Typography className={classes.subtitle2}>
                    <b>MASTERMIND'S cooperation with a Bank in the
                    framework of outsourcing IT professionals has resulted
                    in close cooperation in such areas as Business
                    Intelligence, business analysis, and software
                    development.</b>The long-term business relationship has
                    made MASTERMIND employees part of the furniture at the
                    Bank. 
                    <br/>
                    {source ?  <br/> : null}
                    They have participated in such projects as the
                    development banking system, providing customers with
                    WEB and Mobile solutions to do multiple transactions
                    <br/>
                    {source ?  <br/> : null}
                    The platform had a big impact in the local and national
                    market with hundreds of users using it constantly 24*7.

                    </Typography >           
                </Grid>
                  {source ? <Grid item md={1} lg={1} /> : null}
                <Grid item xs={6} md={6} lg={6}>
                    <img src='wu3.jpg' className={classes.img}/>
                </Grid>
                {/***4ta imagen */}
                <Grid item xs={6} md={6} lg={6}>
                    <img src='wu4.jpg' className={classes.img}/>
                </Grid>
                {source ? <Grid item md={1} lg={1} /> : null}
                <Grid item xs={6} md={4} lg={4}>
                    <Typography className={classes.subtitle2}>
                    <b>Businesses all over the world are dependent on the
                    number of visitors frequenting their physical stores.</b>
                    Modern marketing techniques are hence focusing on
                    location-based advertising (LBA) to target their potential
                    consumers who can reach the store immediately to check
                    out the advertised product.
                    <br/>
                    {source ?  <br/> : null}
                    Based on double and triple check location data ensure
                    most accurate targeting available.
                    <br/>
                    {source ?  <br/> : null}
                    As part of the team we use agile methodology and
                    techniques to develop robust scalable platform with
                    excellent location-based campaign management and
                    analytics tools..
                    <br/>
                    {source ?  <br/> : null}
                    We use AWS, Java, Ruby on Rails, and Scala for
                    implementation.
                    </Typography >           
                </Grid>
                 {source ? <Grid item md={1} lg={1} /> : null}
            </Grid>
        
        </Container>
            
        </>
    );
};



export default ourWork;