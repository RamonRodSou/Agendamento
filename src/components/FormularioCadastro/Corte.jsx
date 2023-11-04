import React, { useState } from "react";
import { Box, Button, Checkbox, Slider } from "@material-ui/core";
// import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
// import useErros from "../../models/hooks/useErros";
import cabelo1 from './img/Cabelo.webp'
import cabelo2 from './img/Cabelo2.webp'
import cabelo3 from './img/Cabelo3.webp'

import apbBarba from './img/ApBarba.webp'
import apbBarba2 from './img/ApBarba2.webp'
import apbBarba3 from './img/ApBarba3.webp'


import fazBarba from './img/FazBarba.webp'
import fazBarba2 from './img/FazBarba2.webp'
import fazBarba3 from './img/FazBarba3.webp'


function Corte({ aoEnviar }) {
  const [cabelo, setCabelo] = useState('');
  const [barba, setBarba] = useState('');
  const [desenhar, setDesenhar] = useState('');


// const validacoes = useContext(ValidacoesCadastro)
// const [erros, validarCampos, possoEnviar] = useErros(validacoes);



  return (
    <form style={{ width:'100%', display:'flex', flexDirection:'column', gap:'2rem'}}
      onSubmit={(event) => {
        event.preventDefault();
        // if (possoEnviar()) {
          aoEnviar({ cabelo, barba, desenhar });
        // }
      }}
    >


      

      <Box sx={{display:'flex', justifyContent:'space-between', margin:'1rem 0', width:'100%'}}>
        <Button type="submit" variant="contained" color="primary">
          Voltar
        </Button>
        <Button type="subzmit" variant="contained" color="primary">
          Próximo
        </Button>
      </Box>

    </form>
  );
}

export default Corte;