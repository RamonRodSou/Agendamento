import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Stack from 'stack';
import { Button, Tooltip, styled } from '@material-ui/core';
import { useState } from 'react';

const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});




function Label({ componentName, valueType, isProOnly }) {

  
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a href="https://mui.com/x/introduction/licensing/#pro-plan">
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

export default function Agenda(aoEnviar) {

  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  return (
    <LocalizationProvider 
    onSubmit={(event) => {
      event.preventDefault();
      // if (possoEnviar()) {
        aoEnviar({ data, hora });
      // }
    }}
      dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'TimePicker',
          'DateTimePicker',
          'DateRangePicker',
        ]}
      >
        <DemoItem
            value={data}
            onChange={(event) => {
              setData(event);
            }}
          label={
            <Label 
              componentName="Data do Agendamento" v
              alueType="date" 
            />
          }
        >
          <DatePicker />
        </DemoItem>
        <DemoItem 
          value={hora}
          onChange={(event) => {
            setHora(event);
          }}
          label={
            <Label 
              componentName="Horas do Agendamento" 
              valueType="time" 
            />
          }
        >
          <TimePicker />
        </DemoItem>
      </DemoContainer>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </LocalizationProvider>
  );
}