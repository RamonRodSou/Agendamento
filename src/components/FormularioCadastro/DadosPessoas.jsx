
import React, { useState, useContext } from "react"
import { TextField, Button, Container } from "@material-ui/core"
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../models/hooks/useErros"
import axios from "axios"

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [telefone, setTelefone] = useState("")
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  const [data, setData] = useState([])

  const url = 'http://localhost:3000/profissional'

  async function Dados() {
    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch (error) {
      console.error('Erro ao obter dados do servidor', error)
    }
  }


  return (
    <Container>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '' }}
        onSubmit={(event) => {
          event.preventDefault()
          if (possoEnviar()) {
            aoEnviar({ nome, sobrenome, telefone })
          }
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value)
          }}

          // onBlur={validarCampos}
          // error={!erros.nome.valido}
          // helperText={erros.nome.texto}
          id="nome"
          label="Nome"
          name="nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value)
          }}
          // onBlur={validarCampos}
          // error={!erros.sobrenome.valido}
          // helperText={erros.sobrenome.texto}
          id="sobrenome"
          name="sobrenome"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={telefone}
          onChange={(event) => {
            setTelefone(event.target.value)
          }}
          // onBlur={validarCampos}
          // error={!erros.telefone.valido}
          type="tel"
          autoComplete="mobile"
          id="telefone"
          name="telefone"
          label="Telefone: 21970003000"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary" style={{ margin: '1.5rem 0' }}>
          Próximo
        </Button>
      </form>
    </Container>
  )
}

export default DadosPessoais


