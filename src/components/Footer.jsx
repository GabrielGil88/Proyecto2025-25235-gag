import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../assets/styles/footer.css";



const Footer = () => {
    return (
        <footer>
            <Container className="fw-bold">
                <Row className="contact-info">
                    <Col className="d-flex justify-content-center" md={6}>
                        <p><FontAwesomeIcon icon={faLocationDot} />Avenida San Martin 2233, Barrio Pepito</p>
                    </Col>
                    <Col className="d-flex justify-content-center" md={6}>
                        <div className="d-flex flex-column align-items-start">
                            <p><FontAwesomeIcon icon={faPhone} /> +54 9 11 1234-5678</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> contacto@tuweb.com</p>
                        </div>
                    </Col>
                </Row>
                <Row>
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
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;