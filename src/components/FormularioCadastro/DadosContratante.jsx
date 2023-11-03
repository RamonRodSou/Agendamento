import React, { useContext, useState } from "react";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import 'react-calendar/dist/Calendar.css';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../models/hooks/useErros";


  
  function DadosContratante({ aoEnviar }) {
    const [telefone, setTelefone] = useState("");
    const { telefone: validarTelefone } = useContext(ValidacoesCadastro);
    
    return (
      <form           
      style={{ border: '1px solid #0000', borderRadius:'5px', backgroundColor: '#ffffff0', width:'100%'}}

        onSubmit={(event) => {
          event.preventDefault();
  
          if (validarTelefone(telefone).valido) {
            if (telefone === "21972923210") {
              aoEnviar();
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
          label="Telefone: 21970003000"
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
  
  export default DadosContratante;
  



