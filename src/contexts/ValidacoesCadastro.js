// import React from "react";

// const ValidacoesCadastro = React.createContext({
//   nome: semValidacao,
//   telefone: semValidacao,
//   data: semValidacao,
//   hora: semValidacao,

// });

// function semValidacao(dados) {
//   console.log(dados);
//   return { valido: true, texto: "" };
// }
// export default ValidacoesCadastro; 

import React from "react";

const ValidacoesCadastro = React.createContext({
  nome: validaNome,
  sobrenome: validaSobrenome,
  telefone: validaTelefone,
  data: validaData,
  hora: validaHora,
});


function validaNome(nome) {
  if (nome.length < 4) {
    return { valido: false, texto: "O Nome deve ter pelo menos 4 caracteres" };
  }
}
function validaSobrenome(sobrenome) {
  if (sobrenome.length < 5) {
    return { valido: false, texto: "O Sobrenome deve ter pelo menos 5 caracteres" };
  }
}
function validaTelefone(telefone) {
  const telefoneRegex = /^\d{10}$/; // Assumindo que um número de telefone tem 10 dígitos
  if (!telefone.match(telefoneRegex)) {
    return { valido: false, texto: "Telefone inválido" };
  }
}

function validaData(data) {
  const dataRegex = /^\d{2}-\d{2}-\d{4}$/; // Assumindo que a data está no formato YYYY-MM-DD
  if (!data.match(dataRegex)) {
    return { valido: false, texto: "Data inválida." };
  }
}

function validaHora(hora) {
  const horaRegex = /^([01]\d|2[0-3]):[0-5]\d$/; // Assumindo que a hora está no formato HH:MM
  if (!hora.match(horaRegex)) {
    return { valido: false, texto: "Hora inválida." };
  }
}

export default ValidacoesCadastro;

// Exemplo de uso nos componentes:

// Importe o contexto
// import ValidacoesCadastro from './ValidacoesCadastro';

// Em seus componentes, você pode usar as funções de validação assim:
// const { nome, setNome, telefone, setTelefone, data, setData, hora, setHora } = useContext(ValidacoesCadastro);

// Para validar o nome, por exemplo:
// const validacaoNome = validaNome(nome);
// if (!validacaoNome.valido) {
//   // Exibir uma mensagem de erro com validacaoNome.texto
// }

// Faça o mesmo para os outros campos (telefone, data, hora).
