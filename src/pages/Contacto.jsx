import React from 'react';
import ContactForm from '../components/Form';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Contacto = () => {
  const handleForm = (data) => {
    console.log('Datos recibidos', data);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4 p-md-5">
              <h2 className="text-center mb-3">Contacto</h2>
              <p className="text-center text-muted mb-4">
                Envíanos tus consultas y te responderemos a la brevedad.
              </p>
              <ContactForm onSubmit={handleForm}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
