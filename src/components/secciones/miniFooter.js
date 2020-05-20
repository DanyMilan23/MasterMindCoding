import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    container:{  
        paddingTop:30,
        paddingBottom:20
    },
    img:{   
        [theme.breakpoints.down("sm")]: {
            width:125,
            height:23,
            paddingRight:'35vw',
        },
        [theme.breakpoints.up("sm")]: {
             width:125,
            height:23,
            paddingRight:'63vw',
        },
        [theme.breakpoints.up("md")]: {
            width:250,
            height:45,
            paddingRight:'63vw',
        },
        [theme.breakpoints.up("lg")]: {
            width:250,
            height:45,
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
                        <FacebookIcon  style={{ color:'#3b5998' }}/>
                        <LinkedInIcon style={{ color:'#0e76a8' }}/> 
                        <TwitterIcon  style={{ color:'#00acee' }}/>  
            </Container>            
        </>
    );
}

export default miniFooter;