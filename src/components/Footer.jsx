import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0">Fast Shop</p>
                        <p className="mb-0">Avenida San Martin 2233, Barrio Pepito</p>
                    </Col>
                    <Col md={6}>
                        <div className="contact-info">
                            <p><FontAwesomeIcon icon={faPhone} /> +54 9 11 1234-5678</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> contacto@tuweb.com</p>
                        </div>

                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;