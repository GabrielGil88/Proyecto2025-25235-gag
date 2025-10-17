import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logoFast.png'


const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '100px', height: '100px', marginRight: '10px' }}
                    />
                    <span>Los productos que queres al alcance de un click</span>
                </Navbar.Brand>

                <Nav className="ms-auto align-items-center">
                    <Nav.Link as={Link} to="/" className="me-3">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/infaltables" className="me-3">Contacto</Nav.Link>

                    <div className="d-flex align-items-center">
                        <Link to="/carrito" className="text-dark me-3">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Link>
                        <Button variant="outline-dark" as={Link} to="/administracion" className="ms-3">
                            Iniciar sesión
                        </Button>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;