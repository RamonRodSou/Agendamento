import React, { useContext, useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../models/hooks/useErros";


function Agenda({ aoEnviar }) {
  // const [data, setData] = useState(new Date());
  // const [hora, setHora] = useState("");
  
  // return (
  //   <form
  //   onSubmit={(event) => {
  //     event.preventDefault();
  //     // if (possoEnviar()) {
  //       aoEnviar({ data, hora });
  //     // }
  //   }}>
    
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
      />  */}

    //  <TextField
    //     value={hora}
    //     onChange={(event) => {
    //       setHora(event.target.value);
    //     }}
    //     // onBlur={validarCampos}
    //     // error={!erros.hora.valido}
    //     // helperText={erros.hora.texto}
    //     id="hora"
    //     name="hora"
    //     label=""
    //     type="time"
    //     variant="outlined"
    //     margin="normal"
    //     fullWidth
    //   /> 


    
    const [data, setData] = useState(new Date());
    const [hora, setHora] = useState("");
    const [selectedHours, setSelectedHours] = useState([]);
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
    const saoPauloTimezoneOffset = -2 * 60; // São Paulo's timezone offset in minutes
    const currentDateTime = new Date();
    currentDateTime.setMinutes(currentDateTime.getMinutes() + saoPauloTimezoneOffset);
  
    const availableHours = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]; // Define your available hours here
  
    const handleDateChange = (date) => {
      const selectedDate = new Date(date);
      // selectedDate.setMinutes(selectedDate.getMinutes() + saoPauloTimezoneOffset);
  
      if (selectedDate >= currentDateTime) {
      setData(selectedDate);
      }
    };
  
    const handleTimeChange = (event) => {
      const selectedTime = event.target.value;
      if (availableHours.includes(selectedTime) && !selectedHours.includes(selectedTime)) {
        setHora(selectedTime);
        setSelectedHours([...selectedHours, selectedTime]);
      }
      
    };
  
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (possoEnviar()) {
          aoEnviar({ data, hora });
        }}}
      >
        <div style={{width:'100%', margin:'1rem 0'}}>
            <Calendar
              value={data}
              onChange={handleDateChange}
              minDate={currentDateTime}
              // onBlur={validarCampos}
              // error={!erros.data.valido}
              // helperText={erros.data.texto}
            />
        </div>
    
          <FormControl fullWidth>
              <InputLabel style={{  margin: '0 0.5rem'}}>Hora</InputLabel>
              <Select
              value={hora}
              onChange={handleTimeChange}
              id="hora"
              name="hora"
              label="Hora"

              // onBlur={validarCampos}
              // error={!erros.hora.valido}
              // helperText={erros.hora.texto}
              
              style={{ border:'1px solid #3f51b5',  padding:'0 1rem'}}
            >
              {availableHours.map((hora) => (
                <MenuItem label="Hora"
                    key={hora} value={hora} disabled={selectedHours.includes(hora)}
                    style={{  margin:'0 1rem'}}>
                  {hora}
                </MenuItem>
              ))}
            </Select>
        
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{margin:'1.5rem 0'}}>
            Finalizar Cadastro
          </Button>
        </form>
  );
}

export default Agenda;



