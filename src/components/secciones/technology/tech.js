import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  
  m: 1,
  border: 1,
  style: { width: '106px', height: '106px' },
};

const useStyles = makeStyles(theme => ({
   cont:{
       paddingTop:20,
       paddingLeft:17,
   }
}))

const tech = ({imagen,estilos}) => {
    const classes = useStyles();
    return (
        <div>
            <Box  borderRadius="50%" {...defaultProps} >
                    <img src={imagen} className={estilos}/>             
            </Box>
        </div>
    );
};

export default tech;