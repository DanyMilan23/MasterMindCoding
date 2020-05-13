import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Router from 'next/router';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import ImagenFondo from '../../public/burbuja.png'

const useStyles = makeStyles((theme) => ({
    parrafo:{
        width: '391px',
        height: '134px',
        fontDize: '14px',
        lineHeight: '18px',
        color: '#17457f',
        fontFamily: "Roboto",
        fontWeight: 400,
    },
    container:{
         //backgroundImage:  "url('/static/images/burbuja.png')",
    }

}));

const burbuja = props => {
     const classes = useStyles();
    return (
        <div className={mainStyle}>
            <Grid container
                spacing={1}
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item xs={10}>
                    <Typography className={classes.parrafo}>
                        The company offers to our customers the best rates and the ideal environment for successful projects.
                        We provide really competitive rates and discounts for all our contracts.
                        We also have several customer retention strategies that will keep you satisfied with us.
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
    );
};



export default burbuja;