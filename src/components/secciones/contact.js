import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Mapita from '../map'

const useStyles = makeStyles(theme => ({
    title: {
    textAlign:'center',
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
      fontSize: "30px",
      paddingTop:30
    },
  },
  imagen:{   
    height:'auto',
    [theme.breakpoints.down("sm")]: {
        width:'80vw',
    },
    [theme.breakpoints.up("sm")]: {
        width:'90vw',
    },
    [theme.breakpoints.up("md")]: {
        width:'35vw',
    },
    [theme.breakpoints.up("lg")]: {
        width:'45vw',
    },
  },
  container:{
      paddingTop:120,
      paddingLeft:56,
      paddingRight:56,
      [theme.breakpoints.down("sm")]: {
         paddingTop:30,
    },
  },
  info:{
    //width:'20vw',
    paddingLeft:20,
    paddingTop:75,    
    width:'auto',
    height:'auto',
    fontSize: '18px',
    letterSpacing: '0px',
    lineHeight: '24px',
    color: '#17457f',
    fontFamily:"'Robot', sans-serif",
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
         paddingTop:20,
         // width:'80vw',
    },
     [theme.breakpoints.up("sm")]: {
         paddingTop:20,
         // width:'80vw',
    },
     [theme.breakpoints.up("md")]: {
        paddingTop:20,
    },
    [theme.breakpoints.up("lg")]: {
        paddingTop:20,
        width:'auto',
    },
  },
   text:{
   
    paddingBottom:20,   
  },
  input:{
      paddingBottom:20,
  },
  div:{
    paddingLeft:25
  }
  
}));

const places = [
  {
    name: "Master Mind Coding LLC",
    title: "Master Mind Coding LLC",
    lat: 27.844573, 
    lng: -82.638146,
    id: 1,
  },
];
function contact({myref}) {
    const classes = useStyles();
    const [email,setEmail]=useState({
        name:'',
        email:'',
        body:'',
    })
    const handlePress = () => {
      
    }
    return (
        <div ref={myref}>
            <Container className={classes.container} maxWidth>
                <Grid 
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={12} md={5} lg={6}>
                        <Mapita
                            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAqAU3g5vFCHVIaa8bvuBNPlYhZOJfv6rA'}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            center={{ lat: 27.844573, lng: -82.638146 }}
                            zoom={15}
                            places={places}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid 
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                            <Grid item xs={12} md={12} lg={12}>
                                <Typography className={classes.title}>CONTACT</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={6} >
                                <Typography className={classes.info}>
                                    7901 4TH ST N STE 4238, <br/>
                                    ST. PETERSBURG, FL 33702<br/>
                                    info@mastermindcoding.net<br/>
                                    Tel: (US) +1-786 633 1731<br/>
                                    Tel: (BO) +591 - 70710554
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={5}>
                                <div  className={classes.div} >
                                
                                <TextField required  
                                className={classes.input} 
                                color="primary" 
                                id="name" 
                                label="Name"
                                onChange={(e) => {
                                    setEmail({
                                    ...email,
                                    name: e.target.value,
                                    });
                                }}
                                fullWidth/>
                                <TextField required  
                                className={classes.input} 
                                color="primary" 
                                id="Email" 
                                label="Email" 
                                onChange={(e) => {
                                    setEmail({
                                    ...email,
                                    email: e.target.value,
                                    });
                                }}
                                fullWidth/>
                                <TextField required  
                                className={classes.input} 
                                color="primary" 
                                id="Subject" 
                                label="Subject" 
                                onChange={(e) => {
                                    setEmail({
                                    ...email,
                                    body: e.target.value,
                                    });
                                }}
                                fullWidth/>
                                <TextField
                                id="text"
                                label="Type your message here..."
                                multiline
                                rows={3}
                                variant="outlined"
                                color="primary" 
                                className={classes.text}
                                fullWidth/>
                               
                               </div>
                            </Grid>
                            <Grid item  xs={10} md={10} lg={9}/>
                            <Grid item  xs={2} md={2} lg={2}>
                                 <Button size="small" variant="contained" color="primary" onClick={handlePress} fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
            </Container>
            
        </div>
    );
}

export default contact;