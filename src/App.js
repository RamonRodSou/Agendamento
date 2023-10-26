import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import {Container, Typography } from "@material-ui/core"
import { validarNome, validarTelefone } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Agendamento</Typography>
        <ValidacoesCadastro.Provider 
          value={{
              nome: validarNome,
              telefone: validarTelefone
              }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados){

  const urlAgenda = 'http://localhost:3000/cliente'
      axios.post(urlAgenda, dados)

    .then(() =>{
        alert( ' adicionado com sucesso na categoria ')
        console.log(dados)
        })
    .catch(error => console.log(error))
}

 
export default App;
