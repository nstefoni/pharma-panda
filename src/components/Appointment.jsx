import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, deleteAppointment }) => (
  <div className='appointment'>
    <p>
      Mascota:<span>{appointment.mascota}</span>
    </p>
    <p>
      Familiar:<span>{appointment.familiar}</span>
    </p>
    <p>
      Fecha:<span>{appointment.fecha}</span>
    </p>
    <p>
      Hora:<span>{appointment.hora}</span>
    </p>
    <p>
      Sintomas:<span>{appointment.sintomas}</span>
    </p>
    <button
      className='button-primary delete u-full-width'
      onClick={() => deleteAppointment(appointment.id)}>
      Eliminar
    </button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
};

export default Appointment;
