import React from 'react';
import ContactForm from '../components/Form';

const Contacto = () => {
  const handleForm = (data) => {
    console.log('Datos recibidos', data);
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4 text-center">Contacto</h2>
      <div
        className="form-container">
        <p className="py-4">Envianos tus consultas, te responderemos a la brevedad.</p>
        <ContactForm onSubmit={handleForm} />
      </div>
    </div>
  );
};

export default Contacto;
