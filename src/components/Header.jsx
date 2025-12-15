import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logoFast.png';
import "../assets/styles/header.css";
import { CartContext } from './CartContext';

const Header = () => {

    const navigate = useNavigate();
    const isAuth = localStorage.getItem('auth') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    }

    const { cartItems } = useContext(CartContext);

    const totalItems = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    return (
        <Navbar expand="lg" className="navbar" sticky="top">
            <Container>
                {/* Logo y frase */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo} alt="Logo" className="brand-logo" />
                </Navbar.Brand>

                {/* Botón hamburguesa */}
                <Navbar.Toggle aria-controls="main-navbar" />

                {/* Contenido colapsable */}
                <Navbar.Collapse id="main-navbar" className="">
                    <Nav className="align-items-center justify-content-between w-100">
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 mx-auto text-center">
                            <Nav.Link as={Link} to="/" className="fw-semibold">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/productos" className="fw-semibold">Productos</Nav.Link>
                            <Nav.Link as={Link} to="/ofertas" className="fw-semibold">Ofertas</Nav.Link>

                            <Nav.Link as={Link} to="/contacto" className="fw-semibold">Contacto</Nav.Link>
                            {isAuth && (
                                <Nav.Link as={Link} to="/crud" className="fw-semibold">Administración</Nav.Link>
                            )}
                        </div>
                        <div className="d-flex align-items-center gap-4">
                            {/* Mostrar boton de login o de cerrar sesion */}
                            {!isAuth ? (
                                <Link className="btn-secundario" as={Link} to="/login">
                                    Iniciar Sesión
                                </Link>
                            ) : (
                                <Button className="btn-secundario" onClick={handleLogout}>
                                    Cerrar Sesión
                                </Button>
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/cart" className="cart-link m-3 position-relative" aria-label="Carrito">
                    <FontAwesomeIcon icon={faShoppingCart} size="xl" />
                    {totalItems > 0 && (
                        <span className="cart-badge">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </Container>
        </Navbar>
    );
};

export default Header;
