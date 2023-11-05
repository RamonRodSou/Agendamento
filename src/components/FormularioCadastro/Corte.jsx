import React, { useState } from "react";
import { Box, Button, Checkbox, Slider } from "@material-ui/core";
// import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
// import useErros from "../../models/hooks/useErros";
import cabelo1 from './img/Cabelo.webp'
import apbBarba from './img/ApBarba.webp'
import fazBarba from './img/FazBarba3.webp'
import Servico from "../Servico/Servico";
import styled from "styled-components";


function Corte({ aoEnviar }) {
  const [cabelo, setCabelo] = useState('');
  const [barba, setBarba] = useState('');
  const [desenhar, setDesenhar] = useState('');


// const validacoes = useContext(ValidacoesCadastro)
// const [erros, validarCampos, possoEnviar] = useErros(validacoes);


const BoxServico = styled(Box)`
&& {
  display: flex;
  gap:1rem;
  justify-content:center;
}

@media (max-width: 700px) {
  && {
    flex-direction: column;

 }  
}
`;


  return (
    <form style={{ width:'100%', display:'flex', flexDirection:'column', gap:'2rem'}}
      onSubmit={(event) => {
        event.preventDefault();
        // if (possoEnviar()) {
          aoEnviar({ cabelo, barba, desenhar });
        // }
      }}
    >
      <BoxServico>
          <Servico
            nome='Corte'
            foto={cabelo1}
            servico={cabelo}
            set={setCabelo}
          />
          <Servico
            nome='Desenhar'
            foto={apbBarba}
            servico={barba}
            set={setBarba}
          />
          <Servico
            nome='Barba'
            foto={fazBarba}
            servico={desenhar}
            set={setDesenhar}
         /> 
      </BoxServico>


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