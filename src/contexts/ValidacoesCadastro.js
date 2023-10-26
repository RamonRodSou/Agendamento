import React from "react";

const ValidacoesCadastro = React.createContext({
  nome: semValidacao,
  telefone: semValidacao,
  data: semValidacao,
  hora: semValidacao,

});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}
export default ValidacoesCadastro;