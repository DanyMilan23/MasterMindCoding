import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    //Google Sans", Roboto, arial, sans-serif
    title:{
        paddingTop:50,
        fontSize: '40px',
        lineHeight: '48px',
        color:'#ffffff',
        fontFamily: "'Google Sans', Roboto, arial, sans-serif",
        fontWeight: 400,
        textAlign:'center',
        letterSpacing: "-1px",
        [theme.breakpoints.down("sm")]: {
            fontSize: '20px',
            paddingTop:5,
        },
    },
    description:{
        paddingLeft:'8vw',
        paddingTop:35,
        paddingBottom:80,
        width: '33vw',
        fontSize: '22px',
        lineHeight: '30px',
        color: '#ffffff',
        //fontFamily: "'Robot', sans-serif",
         fontFamily: "'Google Sans', Roboto, arial, sans-serif",
        fontWeight: 400,
        letterSpacing: "-1px",
        [theme.breakpoints.down("sm")]: {
            fontSize: '11px',
            paddingTop:10,
            width: '70vw',
            paddingLeft:'5vw',
            paddingBottom:15,
        },
        //paddingLeft:140,
    },
    container:{
        width:'100vw',
        height:'auto',
        paddingLeft:56,
        paddingRight:56,
        backgroundColor:'#171c48',
        alignItems:'center',
        [theme.breakpoints.down("sm")]: {
            width: '100vw',          
        },
    },
    sub:{
        alignItems:'center',
    }
}))

const misiovision = () => {
    const classes = useStyles();
    return (
        <>
        <Container className={classes.container} maxWidth>
        {/**titulo */}
            <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
                <Grid item xs={12} md={6} lg={6} className={classes.sub}>
                    <Typography className={classes.title}><b>MISSION</b></Typography>
                    <Typography className={classes.description}>OUR MISSION IS TO BE THE BEST PARTNER
                    FOR OUR CLIENTS, COMPLEMENTING
                    THEIR TEAMS, ASSEMBLING SKILLED
                    WORKFORCE ON DEMAND, PURSUING THE
                    SUCCESS OF THEIR BUSINESS
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6} className={classes.sub}>
                    <Typography className={classes.title}><b>VISSION</b></Typography>
                    <Typography className={classes.description}>OUR VISION IS TO BECOME THE LEADER
                        COMPANY IN NEARSHORE SOFTWARE
                        DEVELOPMENT, WHERE WE TREAT OUR
                        CLIENTS AS OUR PARTNERS AND
                        DEVELOP LONG TERM RELATIONSHIPS
                        BASED UPON OUR TRUSTWORTHINESS
                        AND THE QUALITY OF OUR PRODUCTS
                        AND PROCESSES.
                    </Typography>
                </Grid>
     
            </Grid>   
        </Container>
            
        </>
    );
};

export default misiovision;