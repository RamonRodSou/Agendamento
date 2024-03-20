import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import 'react-calendar/dist/Calendar.css';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import axios from "axios";
import { useEffect } from "react";
// import useErros from "../../models/hooks/useErros";

function DadosProfissional({ aoEnviar }) {
  const [telefone, setTelefone] = useState("");
  const { telefone: validarTelefone } = useContext(ValidacoesCadastro);

  const [data, setData] = useState([])
  const url = 'http://localhost:3000/profissional'

  async function Dados() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao obter dados do servidor', error);
    }
  }

  useEffect(() => {
    Dados()
  }, [])


  return (
    <form
      style={{ border: '1px solid #0000', borderRadius: '5px', backgroundColor: '#ffffff0' }}

      onSubmit={(event) => {
        event.preventDefault();
        // console.log('Aqui esta o telefone ' + telefone)
        if (validarTelefone(telefone).valido) {
          if (data.map((item) => item.telefone).includes(telefone)) {

            aoEnviar();
          } else {
            alert('Profissional não existente')
          }
        }
      }}
    >
      <TextField
        onChange={(event) => setTelefone(event.target.value)}
        type="tel"
        autoComplete="mobile"
        id="telefone"
        name="telefone"
        label="Profissional: 21987654321 or 21900000000"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Agendar
      </Button>
    </form>
  );
}

export default DadosProfissional;




