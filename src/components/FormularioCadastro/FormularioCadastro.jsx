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
  <Typography variant="h5" style={{textAlign:'center', margin:'2rem 0'}}>Obrigado pela preferência!</Typography>

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
  display:flex;
  flex-direction: column;

@media ( max-width: 768px) {
  && {
    width: 100%;
    gap:2rem;
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
    width:100%

 } 
}
`;

const StyledStep= styled(Step)`
&& {

 @media (max-width: 5500px) {
  && {
    width:100%
 } 
}
`;

const StyledStepLabel= styled(StepLabel)`
&& {

 @media (max-width: 440px) {
  && {
    gap:0.2rem;

 } 
}
`;

    return <ContainerDiv>
      <StyledStepper activeStep={etapaAtual} >
        <StyledStep><StyledStepLabel>Contratante</StyledStepLabel></StyledStep>
        <StyledStep><StyledStepLabel>Pessoal</StyledStepLabel></StyledStep>
        <StyledStep><StyledStepLabel>Corte</StyledStepLabel></StyledStep>
        <StyledStep><StyledStepLabel>Agenda</StyledStepLabel></StyledStep>
        <StyledStep><StyledStepLabel>Finalizacao</StyledStepLabel></StyledStep>
      </StyledStepper>
    {formularios[etapaAtual]} </ContainerDiv>
}

export default FormularioCadastro;
