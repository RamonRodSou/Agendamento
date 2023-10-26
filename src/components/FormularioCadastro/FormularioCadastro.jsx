import React, { useEffect, useState } from "react";
import DadosPessoas from "./DadosPessoas";
import Corte from "./Corte";
import Agenda from "./Agenda";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validacoes}) {
const [etapaAtual, setEtapaAtual] = useState(0)
const [dadosColetados, setDados] = useState({})

useEffect(()=> {
  if (etapaAtual === formularios.length-1){
    aoEnviar(dadosColetados)
  }
})

const formularios = [ 
  <DadosPessoas aoEnviar={coletarDados} />,
  <Corte aoEnviar={coletarDados}/>,
  <Agenda aoEnviar={coletarDados}/>,
  <Typography variant="h5">Obrigado pela preferência!</Typography>

]

function coletarDados (dados){
  setDados({...dadosColetados, ...dados})
  proximo()
}


function proximo () {
  setEtapaAtual(etapaAtual + 1)
}


    return <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Corte</StepLabel></Step>
        <Step><StepLabel>Agenda</StepLabel></Step>
        <Step><StepLabel>Finalizacao</StepLabel></Step>
      </Stepper>
    {formularios[etapaAtual]} </>
}

export default FormularioCadastro;
