import React, { useState } from "react";
import { Box, Button, Checkbox } from "@material-ui/core";
// import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
// import useErros from "../../models/hooks/useErros";
import produto from './R.jpeg'

function Corte({ aoEnviar }) {
  const [corte, setCorte] = useState('');
  const [barba, setBarba] = useState('');
  const [bigode, setBigode] = useState('');


// const validacoes = useContext(ValidacoesCadastro)
// const [erros, validarCampos, possoEnviar] = useErros(validacoes);



  return (
    <form style={{ width:'100%', display:'flex', flexDirection:'column', gap:'2rem'}}
      onSubmit={(event) => {
        event.preventDefault();
        // if (possoEnviar()) {
          aoEnviar({ corte });
        // }
      }}
    >
      <Box>
        <h2 style={{margin:'1rem 0', color:'#3f51b5', fontSize:'2rem'}}>Corte</h2>
        <Box  sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',gap: '1rem'} }>
          <Box width={150}>
            <img
              width={150}
              src={produto}/>
          </Box>
          <Box width={150}>
            <img
              width={150}
              src={produto}/>
          </Box>
          <Box width={150}>
            <img
              width={150}
              src={produto}/>
          </Box>

        </Box>
        <Checkbox defaultChecked  style={{ width: '0', color:'#3f51b5'}}            
        value={corte}
              onChange={(event) => {
                setCorte(event);
              }} />
      </Box>

      <Box>
        <h2 style={{margin:'1rem 0', color:'#3f51b5', fontSize:'2rem'}}>Barba</h2>
        <Box  sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',gap: '1rem'} }>
          <Box width={150}>
            <img
              width={150}
              src={produto}
            />
          </Box>
          <Box width={150}>
            <img
              width={150}
              src={produto}
            />
          </Box>
          <Box width={150}>
            <img
              width={150}
              src={produto}
            />
          </Box>
        </Box>
        <Checkbox   style={{ width: '0', color:'#3f51b5'}}              
              value={barba}
              onChange={(event) => {
                setBarba(event);
              }} 
        />
      </Box>
      
      <Box>
        <h2 style={{margin:'1rem 0', color:'#3f51b5', fontSize:'2rem'}}>Bigode</h2>
        <Box  sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',gap: '1rem'} }>
          <Box width={150}>
            <img
              width={150}
              src={produto}
            />
          </Box>
          <Box width={150}>
            <img
              width={150}
              src={produto}       
              value={bigode}
            />
          </Box>
          <Box width={150}>
            <img
              width={150}
              src={produto}       
              value={bigode}
            />
          </Box>
        </Box>
        <Checkbox color="secondary"  style={{ width: '0', color:'#3f51b5'}}
            value={bigode}
            onChange={(event) => {
              setBigode(event);
            }}
        />
      </Box>

      <Box sx={{display:'flex', justifyContent:'space-between', margin:'1rem 0', width:'100%'}}>
        <Button type="submit" variant="contained" color="primary">
          Anterior
        </Button>
        <Button type="subzmit" variant="contained" color="primary">
          Próximo
        </Button>
      </Box>

    </form>
  );
}

export default Corte;