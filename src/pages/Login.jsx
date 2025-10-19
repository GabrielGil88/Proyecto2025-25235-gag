import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login enviado');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={4} lg={4}>
          <Card className="shadow-lg border-0 rounded-4 p-3">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formUsername">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su usuario" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 my-3">
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;