import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Calendario from "../Calendario/Calendario";
// import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
// import useErros from "../../models/hooks/useErros";


function Agenda({ aoEnviar }) {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  
  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      // if (possoEnviar()) {
        aoEnviar({ data, hora });
      // }
    }}
    >
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default Agenda;





      {/* <TextField
        value={data}
        onChange={(event) => {
          setData(event.target.value);
        }}
        // onBlur={validarCampos}
        // error={!erros.data.valido}
        // helperText={erros.data.texto}
        id="data"
        name="data"
        label=""
        type="date"
        variant="outlined"
        margin="normal"
        fullWidth
      /> */}
     {/* <TextField
        value={hora}
        onChange={(event) => {
          setHora(event.target.value);
        }}
        // onBlur={validarCampos}
        // error={!erros.hora.valido}
        // helperText={erros.hora.texto}
        id="hora"
        name="hora"
        label=""
        type="time"
        variant="outlined"
        margin="normal"
        fullWidth
      /> */}