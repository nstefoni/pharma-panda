import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  //appointments en Local Storage
  //JSON.parse convierte el array dentro de un string que sea facil de manipular
  //getItem() trae lo que este almacenado en el Storage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  //appointments array
  //pasamos initialAppointment como valor inicial en nuestro State
  const [appointments, saveAppointments] = useState(initialAppointments);

  //useEffect() para realizar ciertas operaciones cuando el State cambia
  //setItem() guarda/modifica el Storage
  //JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointment", JSON.stringify([]));
    }
  }, [appointments, initialAppointments]);

  const createAppointment = appointment => {
    saveAppointments([...appointments, appointment]);
  };

  //función que elimina una cita por su id
  const deleteAppointment = id => {
    const newAppointment = appointments.filter(
      appointment => appointment.id !== id
    );
    saveAppointments(newAppointment);
  };

  //Mensaje condicional
  const title = appointments.length === 0 ? "No hay citas" : "Citas:";

  return (
    <Fragment>
      <h1 className='lines'>Pharma_Panda</h1>
      <h2>( ꈍᴗꈍ)</h2>
      <h6>Administrador para Veterinarixs</h6>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createAppointment={createAppointment} />
          </div>
          <div className='one-half column'>
            <h5>{title}</h5>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
// 004346 546A7B FDFDFF 000103
