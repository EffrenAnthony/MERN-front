import React from 'react';
import { Button } from 'react-bootstrap';

const OtherSection = () => {
  var nombre = 'Anthony Peña'
  function mostrarAlertaConNombre() {
    alert(`Hola ${nombre}`);
  }
  return (
    <div>
      <Button block> Boton de react Bootstrap </Button>
      <button 
        className='btn btn-primary btn-block p-5'
        onClick={mostrarAlertaConNombre}
      >
        <b>Mandar un alert</b>
      </button>
    </div>
  );
};

export default OtherSection;