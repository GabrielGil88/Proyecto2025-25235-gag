import React from 'react';
import ContactForm from '../components/Forms';

const Contacto = () => {
  const handleForm = (data) => {
    console.log('Datos recibidos', data);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Contacto</h2>
      <div
        className="form-container">
        <ContactForm onSubmit={handleForm} />
      </div>
    </div>
  );
};

export default Contacto;
