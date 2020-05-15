import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
   title: {
    fontSize: "60px",
    lineheight: "20px",
    color: "#171c48",
    fontFamily: "'Robot', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  img:{
    height:'auto',
    width:'45vw',
    paddingBottom:70,
    [theme.breakpoints.down("sm")]: {
      //fontSize: "10px",
      width: '90vw',
      paddingBottom:10,
    },
  },
  subtitle:{
    paddingTop:80,
    width: '40vw',
    //height: '377px',
    fontSize: '18px',
    lineHeight: '20px',
    color: '#17457f',
    fontFamily:  "'Robot', sans-serif",
    fontWeight: 500,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      width: '80vw',
      paddingTop:10,
    },
  },
  description:{

  },
  container:{
    marginTop:50,
    marginBottom:50
  },
 
}));
const ourWork = () => {
    const classes = useStyles();
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
                
                <Grid item xs={12} md={12} lg={12}>
                    <Typography className={classes.title}>OUR WORK</Typography>
                </Grid>
                {/**seccion */}
                <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography className={classes.subtitle}>MASTERMIND has joined up with a telecommunications
                    company which provides voice, data and TV services.
                    Such a wide service.
                    <br/>
                     <br/>
                    Portfolio means a large amount of data that needs to be
                    processed and analyzed. MASTERMIND has developed an
                    efficient and user-friendly solution that collects data from
                    various platforms, processes, and analyzes it, to generate
                    management reports in real-time.
                    <br/>
                     <br/>
                    The key to this successful partnership was great
                    communication between teams, the processes, and
                    methodology implemented that drives project growth and
                    extended the partnership for more than three years.
                    </Typography >           
                </Grid>
                 <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={12} md={6} lg={6}>
                    <img src='wu1.jpg' className={classes.img}/>
                </Grid>
                
                {/**2da imagen */}
                <Grid item xs={12} md={6} lg={6}>
                    <img src='wu2.jpg' className={classes.img}/>
                </Grid>
                <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography className={classes.subtitle}>
                    A big Leading Physical Therapy Software company based
                    in Phoenix, Arizona trusts MASTERMIND team with the
                    development & QA of their website and core platforms, to
                    ensure that they have the highest quality release after
                    release an to got a more efficient platform implemented
                    with the latest technologies.
                    <br/><br/>
                    As a result, The Physical Therapy Software company
                    improve His KPI of client retention, while optimizing User
                    Experience and prioritizing cybersecurity.

                    </Typography >           
                </Grid>
                 <Grid item xs={1} md={1} lg={1}/>
                 {/**3er imagen */}
                 <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography className={classes.subtitle}>
                    MASTERMIND'S cooperation with a Bank in the
                    framework of outsourcing IT professionals has resulted
                    in close cooperation in such areas as Business
                    Intelligence, business analysis, and software
                    development. The long-term business relationship has
                    made MASTERMIND employees part of the furniture at the
                    Bank. 
                    <br/><br/>
                    They have participated in such projects as the
                    development banking system, providing customers with
                    WEB and Mobile solutions to do multiple transactions
                    <br/><br/>
                    The platform had a big impact in the local and national
                    market with hundreds of users using it constantly 24*7.

                    </Typography >           
                </Grid>
                 <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={12} md={6} lg={6}>
                    <img src='wu3.jpg' className={classes.img}/>
                </Grid>
                {/***4ta imagen */}
                <Grid item xs={12} md={6} lg={6}>
                    <img src='wu4.jpg' className={classes.img}/>
                </Grid>
                <Grid item xs={1} md={1} lg={1}/>
                <Grid item xs={12} md={4} lg={4}>
                    <Typography className={classes.subtitle}>
                    Businesses all over the world are dependent on the
                    number of visitors frequenting their physical stores.
                    Modern marketing techniques are hence focusing on
                    location-based advertising (LBA) to target their potential
                    consumers who can reach the store immediately to check
                    out the advertised product.
                    <br/><br/>
                    Based on double and triple check location data ensure
                    most accurate targeting available.
                    <br/><br/>
                    As part of the team we use agile methodology and
                    techniques to develop robust scalable platform with
                    excellent location-based campaign management and
                    analytics tools..
                    <br/>
                    We use AWS, Java, Ruby on Rails, and Scala for
                    implementation.
                    </Typography >           
                </Grid>
                 <Grid item xs={1} md={1} lg={1}/>
            </Grid>
        
        </Container>
            
        </>
    );
};



export default ourWork;