import { Box, Checkbox } from "@material-ui/core";
import React from "react";

export default function  Servico ({nome, foto, servico, set}) {

    return (

      <Box sx={{display:'flex', 
                justifyContent:'center', 
                flexDirection:'column', 
                alignItems:'center',
                borderRadius:'1rem',
                backgroundImage: `url(${foto})`,
                backgroundSize: 'cover',

        }}>
        <Box width={150} height={200} style={{}} >
            {/* <img
              style={{}}
              width={150}
              height={200}
              src={foto}
            /> */}
        </Box>
        <Box sx={{display:'flex',
                  justifyContent:'flex-start',
                  alignItems:'center',
                  width:'100%',
                  gap:'1rem ',
                  marginLeft:'1.5rem'
        }}>
          <Checkbox
            style={{ width:'0', height:'0', color: '#fff', boxShadow:'2px 2px 10px #3f51b5'}}
            value={servico}
            onChange={(event) => {
            set(event.target.checked)
          }}
          />
          <h2 style={{margin:'1rem 0', color:'#fff', fontSize:'1.5rem', flexGrow:'1', textShadow:'3px 5px 5px #3f51b5'}}>{nome}</h2>

        </Box>
      </Box>

    )
}