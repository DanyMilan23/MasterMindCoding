import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 50,
    
  }, 
}));
const grid =() =>{
    const classes = useStyles();
    return(
    <Container  maxWidth>
        {/**titulo */}
            <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
                <Grid item xs={1} md={1} lg={1}>
                   <Paper className={classes.paper}>
                        1
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                   <Paper className={classes.paper}>
                        2
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        3
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        4
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        5
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        6
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        7
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        8
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        9
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        10
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                   <Paper className={classes.paper}>
                        11
                   </Paper>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Paper className={classes.paper}>
                        12
                   </Paper>
                </Grid>
            </Grid>
    </Container>
    )
}

export default grid