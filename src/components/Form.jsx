import React, { Fragment, useState } from "react";

const Form = () => {
  const [appointment, updateAppointment] = useState({
    mascota: "",
    familiar: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, updateError] = useState(false);

  const handleChange = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  //extract values
  const { mascota, familiar, fecha, hora, sintomas } = appointment;

  const submitAppointment = e => {
    e.preventDefault();

    //validation
    if (
      mascota.trim() === "" ||
      familiar.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      updateError(true);
      return;
    }
    //assign id

    //create appointment

    //reset form
  };

  return (
    <Fragment>
      <h5>Crear Cita</h5>
      {error ? (
        <p className='alert-error'>¡¡Debes completar todos los campos!!</p>
      ) : null}
      <form onSubmit={submitAppointment}>
        <label>Nombre de Mascota</label>
        <input
          type='text'
          name='mascota'
          className='u-full-width'
          placeholder='Nombre de Mascota'
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre de Familiar</label>
        <input
          type='text'
          name='familiar'
          className='u-full-width'
          placeholder='Nombre de Familiar'
          onChange={handleChange}
          value={familiar}
        />

        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className='u-full-width'
          name='sintomas'
          onChange={handleChange}
          value={sintomas}></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Agregar
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
