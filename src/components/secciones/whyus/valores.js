import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//componentes
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Burbuja from "./burbuja";
import Valor from "./valor";
import Constants from "../../../config/constants";

const useStyles = makeStyles((theme) => ({
  burbuja: {
    width: "35vw",
    paddingLeft: "8vw",
    paddingRight: "7vw",
  },
  containerBurbuja:{
    width: "100vw",
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
    },
  },
  container:{
      display:'flex'
  },
  step:{
      height:85,
  }
}));

const valores = (props) => {
  const classes = useStyles();
  const [source, setSource] = useState(false);
  //media querys
  const matches = useMediaQuery("(min-width:1025px)");
  useEffect(() => {
    setSource(matches);
  }, [matches]);
  const [valor, setValor] = useState({
    val1: true,
    val2: false,
    val3: false,
    val4: false,
    val5: false,
  });
  let desc1 = (
    <div>
      OUR GEOGRAPHICAL PROXIMITY IS A HUGE PLUS FOR YOUR AGILE SOFTWARE
      DEVELOPMENT, WE ENSURE SUCCESSFUL SOFTWARE DEVELOPMENT PROJECT BASED ON
      EFFICIENT COMMUNICATION BETWEEN TEAMS AND CUSTOMERS.
    </div>
  );
  let desc2 = (
    <div>
      THE COMPANY OFFERS TO OUR CUSTOMERS THE BEST RATES AND THE IDEAL
      ENVIRONMENT FOR SUCCESSFUL PROJECTS.
      <br />
      WE PROVIDE REALLY COMPETITIVE RATES AND DISCOUNTS FOR ALL OUR CONTRACTS.
      <br />
      WE ALSO HAVE SEVERAL CUSTOMER RETENTION STRATEGIES THAT WILL KEEP YOU
      SATISFIED WITH US.
    </div>
  );
  let desc3 = (
    <div>
      OUR COMPANY VALUES AND PROMOTES SMART WORK AND CONTINUOUS IMPROVEMENT IN
      ORDER TO PROVIDE HIGH QUALITY IN EVERY PROCESS AND PRODUCT.
      <br />
      OUR TEAMS APPLY HIGH QUALITY CODING STANDARDS AND ADVOCATE THE USE OF
      AGILE METHODOLOGIES IN ORDER TO ENSURE THE QUALITY OF EVERY DELIVERY.
    </div>
  );
  let desc4 = (
    <div>
      CONFIDENTIALITY & INTELLECTUAL PROPERTY POLICIES DOING BUSINESS WITH
      MASTERMIND IS THE SAME AS WITH ANY OTHER US BASED COMPANY.
      <br /> WE ENSURE CONFIDENTIALITY AND PROPER USE OF YOUR INFORMATION
      THROUGH THE FOLLOWING POLICIES: AS A US BASED COMPANY ALL CUSTOMER’S
      AGREEMENT ARE US CONTRACTS.
      <br /> YOUR INTELLECTUAL PROPERTY IS PROTECTED BY DOCUMENTED,
      COMPREHENSIVE LEVELS OF PHYSICAL AGREEMENTS.
      <br /> ALL EMPLOYEES ARE SUBJECT TO STRICT IP PROTECTION AND
      CONFIDENTIALITY POLICIES ENFORCED BY NDAS.
    </div>
  );
  let desc5 = (
    <div>
      OUR DEVELOPERS ARE CAREFULLY SELECTED AND TRAINED WITH THE GOAL OF
      IMPROVING THE LEARNING CURVE PROCESS.
      <br /> WE HIRE DOERS WE HIRE PEOPLE YOU CAN TRUST WE ALSO TAKE INTO
      ACCOUNT THAT HIRING GOOD WRITERS AND COMMUNICATORS ARE CRITICAL FOR THE
      BUSINESS SUCCESS WE KEEP GROWING THE SKILLSET OF OUR DEVELOPERS THROUGH
      THE COMPANY’S TRAINING PLAN WHICH MATCHES THE PROJECTS REQUIREMENTS AND
      EMPLOYEE’S POTENTIAL.
    </div>
  );

  return (
    
    <div className={classes.container}>
      {/*Columna Borbuja */}
      {source ? (
        <div className={classes.containerBurbuja}>
          {valor.val1 ? (
            <Burbuja descripcion={desc1} className={classes.burbuja} />
          ) : <div style={{ height:130}}/>}
          {valor.val2 ? (
            <Burbuja descripcion={desc2} className={classes.burbuja} />
          ) : <div style={{ height:115}}/>}
          {valor.val3 ? (
            <Burbuja descripcion={desc3} className={classes.burbuja} />
          ) : <div style={{ height:135}}/>}
          {valor.val4 ? (
            <Burbuja descripcion={desc4} className={classes.burbuja} />
          ) : <div style={{ height:120}}/>}
          {valor.val5 ? (
            <Burbuja descripcion={desc5} className={classes.burbuja} />
          ) :null}
        </div>
      ) : null}

      {/**Columna la otra */}
      <div className={classes.containerBurbuja}>
        <Valor
          descripcion={desc1}
          imagen="capa1.png"
          titulo={Constants.STRINGS.VALOR1TITLE}
          resumen={Constants.STRINGS.VALOR1RES}
          tipo={1}
          estado={valor.val1}
          funcion={(e) => {
            e.preventDefault();
            setValor({
              val1: true,
              val2: false,
              val3: false,
              val4: false,
              val5: false,
            });
          }}
        />
        <Valor
          descripcion={desc2}
          imagen="capa2.png"
          titulo={Constants.STRINGS.VALOR2TITLE}
          resumen={Constants.STRINGS.VALOR2RES}
          tipo={2}
          estado={valor.val2}
          funcion={(e) => {
            e.preventDefault();
            setValor({
              val1: false,
              val2: true,
              val3: false,
              val4: false,
              val5: false,
            });
          }}
        />
        <Valor
          descripcion={desc3}
          imagen="capa3.png"
          titulo={Constants.STRINGS.VALOR3TITLE}
          resumen={Constants.STRINGS.VALOR3RES}
          tipo={3}
          estado={valor.val3}
          funcion={(e) => {
            e.preventDefault();
            setValor({
              val1: false,
              val2: false,
              val3: true,
              val4: false,
              val5: false,
            });
          }}
        />
        <Valor
          descripcion={desc4}
          imagen="capa4.png"
          titulo={Constants.STRINGS.VALOR4TITLE}
          resumen={Constants.STRINGS.VALOR4RES}
          tipo={4}
          estado={valor.val4}
          funcion={(e) => {
            e.preventDefault();
            setValor({
              val1: false,
              val2: false,
              val3: false,
              val4: true,
              val5: false,
            });
          }}
        />
        <Valor
          descripcion={desc5}
          imagen="capa5.png"
          titulo={Constants.STRINGS.VALOR5TITLE}
          resumen={Constants.STRINGS.VALOR5RES}
          tipo={5}
          estado={valor.val5}
          funcion={(e) => {
            e.preventDefault();
            setValor({
              val1: false,
              val2: false,
              val3: false,
              val4: false,
              val5: true,
            });
          }}
        />
      </div>
    </div>
  );
};

export default valores;
