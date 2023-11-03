import React, { useEffect, useState } from "react";
import DadosContratante from "./DadosContratante";
import DadosPessoas from "./DadosPessoas";
import Corte from "./Corte";
import Agenda from "./Agenda";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import styled from "styled-components";



function FormularioCadastro({aoEnviar, validacoes}) {
const [etapaAtual, setEtapaAtual] = useState(0)
const [dadosColetados, setDados] = useState({})

useEffect(()=> {
  if (etapaAtual === formularios.length-1){
    aoEnviar(dadosColetados)
  }
})

const formularios = [ 
  <DadosContratante aoEnviar={coletarDados} />,
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

const ContainerDiv = styled.div`
&& {
}

@media (max-width: 768px) {
  && {
    width: 100%;
    gap:1rem;
    margin: 1rem 0:

 }  
}
`;



const StyledStepper = styled(Stepper)`
&& {
  background-color: #ffffff10;
  display: flex;
}

@media (max-width: 768px) {
  && {
    gap:0.5rem;
    padding:0;

    flex-wrap: wrap;
    gap:1rem;
    justify-content:flex-start;
    align-items: center;

 }  


 @media (max-width: 470px) {
  && {
    flex-direction: column;
    justify-content:flex-start;
    width:100%

 } 
}
`;

const StyledStepLabel= styled(StepLabel)`
&& {


@media (max-width: 768px) {
  && {

 }  

 @media (max-width: 440px) {
  && {

    gap:0.2rem;

 } 
}
`;

    return <ContainerDiv>
      <StyledStepper activeStep={etapaAtual} >
        <Step><StyledStepLabel>Contratante</StyledStepLabel></Step>
        <Step><StyledStepLabel>Pessoal</StyledStepLabel></Step>
        <Step><StyledStepLabel>Corte</StyledStepLabel></Step>
        <Step><StyledStepLabel>Agenda</StyledStepLabel></Step>
        <Step><StyledStepLabel>Finalizacao</StyledStepLabel></Step>
      </StyledStepper>
    {formularios[etapaAtual]} </ContainerDiv>
}

export default FormularioCadastro;
