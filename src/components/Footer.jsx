import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../assets/styles/footer.css";



const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={6}>
                        <p>Fast Shop</p>
                        <p>Avenida San Martin 2233, Barrio Pepito</p>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex flex-column align-items-center mb-3">
                            <div className="contact-info">
                                <p><FontAwesomeIcon icon={faPhone} /> +54 9 11 1234-5678</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> contacto@tuweb.com</p>
                            </div>
                        </div>

                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="xl" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;