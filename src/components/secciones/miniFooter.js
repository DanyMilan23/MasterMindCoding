import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop:20,
        paddingBottom:20
    },
   
    img:{
        
        [theme.breakpoints.down("sm")]: {
            width:125,
            height:27,
            paddingRight:'35vw',
        },
        [theme.breakpoints.up("sm")]: {
             width:125,
            height:27,
            paddingRight:'63vw',
        },
        [theme.breakpoints.up("md")]: {
            width:250,
            height:55,
            paddingRight:'63vw',
        },
        [theme.breakpoints.up("lg")]: {
            width:250,
            height:55,
            paddingRight:'70vw',
        },
    },

}))

function miniFooter(props) {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container} maxWidth>
                
                    <img className={classes.img} src='logo-brand.png'/>
                
        
                        <FacebookIcon  color='primary'/>
                        <LinkedInIcon color='primary'/>
                        <TwitterIcon  color='primary'/>
                         
              
                
            </Container>            
        </>
    );
}

export default miniFooter;