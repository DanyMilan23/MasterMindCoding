import React, { useState } from "react";
//componentes
import Valor from "./valor";
import Constants from "../config/constants";

const valores = (props) => {
  const [valor, setValor] = useState({
    val1: true,
    val2: false,
    val3: false,
    val4: false,
    val5: false,
  });

  return (
    <div>
      <Valor
        descripcion={Constants.STRINGS.VALOR1DESC}
        imagen="capa1.png"
        titulo={Constants.STRINGS.VALOR1TITLE}
        resumen={Constants.STRINGS.VALOR1RES}
        tipo={true}
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
        descripcion={Constants.STRINGS.VALOR2DESC}
        imagen="capa2.png"
        titulo={Constants.STRINGS.VALOR2TITLE}
        resumen={Constants.STRINGS.VALOR2RES}
        tipo={false}
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
        descripcion={Constants.STRINGS.VALOR3DESC}
        imagen="capa3.png"
        titulo={Constants.STRINGS.VALOR3TITLE}
        resumen={Constants.STRINGS.VALOR3RES}
        tipo={true}
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
        descripcion={Constants.STRINGS.VALOR4DESC}
        imagen="capa4.png"
        titulo={Constants.STRINGS.VALOR4TITLE}
        resumen={Constants.STRINGS.VALOR4RES}
        tipo={false}
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
        descripcion={Constants.STRINGS.VALOR5DESC}
        imagen="capa5.png"
        titulo={Constants.STRINGS.VALOR5TITLE}
        resumen={Constants.STRINGS.VALOR5RES}
        tipo={true}
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
  );
};

export default valores;