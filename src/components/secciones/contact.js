import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  imagen:{
   
    width:'45vw',
    height:'auto',
  },
  container:{
      paddingTop:40
  },
  info:{
      paddingTop:40    
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
                                <Typography>CONTACT</Typography>
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
                                <TextField required id="name" label="Name" fullWidth/>
                                <TextField required id="Email" label="Email" fullWidth/>
                                <TextField required id="Subject" label="Subject" fullWidth/>
                                <Typography>Type your message here...</Typography>
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