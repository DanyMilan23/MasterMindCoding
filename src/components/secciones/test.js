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
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700,
    letterSpacing: "-1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
       paddingLeft:'5vw',
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
       paddingLeft:'5vw',
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
       paddingLeft:'5vw',
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
      paddingTop:30,
      paddingLeft:'5vw',
    },
  },
 
  container:{
      paddingTop:20,
      paddingBottom:40,
  },
    div1:{
        paddingLeft:'10vw',
        paddingRight:'10vw',
    },
    text:{
        width:'30vw',
        height:'auto',
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
    divimg:{
        width:'50vw',
        height:'auto',
    },
    img:{
        width:'auto',
        height:'auto',
    },
    root: {
        paddingBottom:50,
        flexDirection: "row",
        display:'flex',
        [theme.breakpoints.down("sm")]: {
            paddingBottom:20,
        },
        //justifyContent: "space-between",
    },
 
}));
const test = () => {
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
            <div className={classes.container}>
                <Typography className={classes.title}>OUR WORK</Typography>
                {/*texto */}
                <div className={classes.root}>
                    <div className={classes.div1} >
                        <Typography className={classes.text}><b>MASTERMIND has joined up with a telecommunications
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
                        
                    </div>
                    {/*imagen */}
                    <div >
                        <img src='wu1.jpg' className={classes.divimg} />
                    </div>
                </div>
                <div className={classes.root}>
                    <div >
                        <img src='wu2.jpg' className={classes.divimg} />
                    </div>
                    <div className={classes.div1} >
                        <Typography className={classes.text}>
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
                        
                    </div>
                </div>
                <div className={classes.root}>
                    <div className={classes.div1} >
                        <Typography className={classes.text}>
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
                        
                    </div>
                    {/*imagen */}
                    <div >
                        <img src='wu3.jpg' className={classes.divimg} />
                    </div>                        
                </div>
                <div className={classes.root}>
                    <div >
                        <img src='wu4.jpg' className={classes.divimg} />
                    </div>
                    <div className={classes.div1} >
                        <Typography className={classes.text}><b>MASTERMIND has joined up with a telecommunications
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
                        
                    </div>
                    {/*imagen */}
                </div>
            </div>
        </>
    );
};



export default test;