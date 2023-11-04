import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import {Box, Container, Typography } from "@material-ui/core"
import { validarNome, validarTelefone } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import AoEnviarForm from "./contexts/AoEnviarForm";
import LogoImg from './logo.webp'
import styled from "styled-components";


const LogoSt = styled.img`
  width: 100px;
`;

const StyledContainer = styled(Container)`
  && {
    background-color: #fefefe;
    border-radius: 10px;
    margin-top: 1.5rem;
    padding: 1.5rem;
    box-shadow: 2px 3px 5px #3f51b5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      background-color: #f0f0f0;
      padding: 2rem;
      gap:1rem;
      width:80%
    }
  }

`;

const StyledBox = styled(Box)`
  && {

    
    @media (max-width: 656px) {

        display:flex;
        flex-direction: column;
        align-items: center;
        gap:0.5rem;
        margin-bottom: 1.5rem;
        
    }

    @media (max-width: 400px) {

      font-size:1rem;
  }
  }
`;

const StyledTypography = styled(Typography)`
  && {

    flexGrow:'0.5';

    @media (max-width: 470px) {

      font-size:2.5rem;
  }
    @media (max-width: 400px) {

      font-size:2rem;
  }
  }
`;

class App extends Component {
  render() {
    return (
      <StyledContainer component="article" maxWidth="sm"      >
        <StyledBox sx={{display:'flex',alignItems:'center'}}>
          <LogoSt                            
              src={LogoImg} 
              alt={LogoImg}
            />
            <StyledTypography  variant="h3" component="h1" align="center">Agendamento</StyledTypography>
        </StyledBox>
        <ValidacoesCadastro.Provider 
          value={{
              nome: validarNome,
              telefone: validarTelefone 
              }}>
        <FormularioCadastro aoEnviar={AoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </StyledContainer>
    );
  }
}

export default App;
