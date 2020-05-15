import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
  imagen:{
   
    width:'45vw',
    height:'auto',
  },
  container:{
      paddingTop:40
  },
  info:{
    paddingTop:40,    
    width:'auto',
    height:'auto',
    fontSize: '18px',
    letterSpacing: '0px',
    lineHeight: '24px',
    color: '#17457f',
    fontFamily:"'Robot', sans-serif",
    fontWeight: 400,
  }
}));

function contact(props) {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.container} maxWidth>
                <Grid 
                container
                spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Grid item xs={12} md={5} lg={6}>
                        <img src={'maps.png'}  className={classes.imagen}/>
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
                            <Grid item xs={12} md={6} lg={6} >
                                <Typography className={classes.info}>7901 4TH ST N STE 4238, 

                                    ST. PETERSBURG, FL 33702

                                    info@mastermindcoding.net

                                    Tel: (US) +1-786 633 1731

                                    Tel: (BO) +591 - 70710554
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <TextField required  color="primary" id="name" label="Name" fullWidth/>
                                <TextField required  color="primary" id="Email" label="Email" fullWidth/>
                                <TextField required  color="primary" id="Subject" label="Subject" fullWidth/>
                                <Typography className={classes.info}>Type your message here...</Typography>
                                <Button variant="contained" color="primary">
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