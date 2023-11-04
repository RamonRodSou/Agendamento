import { Box, Checkbox } from "@material-ui/core";
import React from "react";

export default function  Servico ({nome, foto, servico, set}) {

    return (

        <Box>
        <h2 style={{margin:'1rem 0', color:'#3f51b5', fontSize:'2rem'}}>{nome}</h2>
        <Box width={150}>
            <img
              width={150}
              height={220}
              src={foto}
            />
          </Box>
        
        <Checkbox
          style={{ width: '0', color: '#3f51b5' }}
          value={servico}
          onChange={(event) => {
          setBarba(event.target.checked);
        }}
        />
        </Box>

    )
}


















