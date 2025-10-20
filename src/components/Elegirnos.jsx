import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faShieldHalved, faHeadset } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/elegirnos.css";

const PorQueElegirnos = () => {
    return (
        <Container className="seccion">
            <h2 className="text-center mb-4 fw-bold">¿Por qué elegirnos?</h2>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card className="benefit-card text-center p-4">
                        <FontAwesomeIcon icon={faTruckFast} size="2x" className="icono" />
                        <Card.Title className="mt-3">Envíos Gratis</Card.Title>
                        <Card.Text>
                            Realizá tu compra y recibila sin costo adicional en todo el país.
                        </Card.Text>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="benefit-card text-center p-4">
                        <FontAwesomeIcon icon={faShieldHalved} size="2x" className="icono" />
                        <Card.Title className="mt-3">Pago Seguro</Card.Title>
                        <Card.Text>
                            Tus datos están protegidos. Operamos con los métodos de pago más confiables.
                        </Card.Text>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="benefit-card text-center p-4">
                        <FontAwesomeIcon icon={faHeadset} size="2x" className="icono" />
                        <Card.Title className="mt-3">Atención Personalizada</Card.Title>
                        <Card.Text>
                            Nuestro equipo está siempre disponible para ayudarte con cualquier consulta.
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PorQueElegirnos;
