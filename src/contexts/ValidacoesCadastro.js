import React from "react"

const ValidacoesCadastro = React.createContext({
  nome: validaNome,
  sobrenome: validaSobrenome,
  telefone: validaTelefone,
  data: validaData,
  hora: validaHora,
})


function validaNome(nome) {
  if (nome.length < 4) {
    return { valido: false, texto: "O Nome deve ter pelo menos 4 caracteres" }
  }
}
function validaSobrenome(sobrenome) {
  if (sobrenome.length < 5) {
    return { valido: false, texto: "O Sobrenome deve ter pelo menos 5 caracteres" }
  }
}
function validaTelefone(telefone) {
  const telefoneRegex = /^\d{10}$/
  if (!telefone.match(telefoneRegex)) {
    return { valido: false, texto: "Telefone inválido" }

  }
}

function validaData(data) {
  const dataRegex = /^\d{2}-\d{2}-\d{4}$/
  if (!data.match(dataRegex)) {
    return { valido: false, texto: "Data inválida." }
  }
}

function validaHora(hora) {
  const horaRegex = /^([01]\d|2[0-3]):[0-5]\d$/
  if (!hora.match(horaRegex)) {
    return { valido: false, texto: "Hora inválida." }
  }
}

export default ValidacoesCadastro
