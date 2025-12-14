import { React, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
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
                    <span>Los productos que queres al alcance de un <b style={{ color: 'var(--color-primary)ff' }}>click</b></span>
                </Navbar.Brand>

                {/* Botón hamburguesa */}
                <Navbar.Toggle aria-controls="main-navbar" />

                {/* Contenido colapsable */}
                <Navbar.Collapse id="main-navbar" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/productos" className="me-3">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/contacto" className="me-3">Contacto</Nav.Link>
                        {isAuth && (
                            <Nav.Link as={Link} to="/crud" className="me-3">Administración</Nav.Link>
                        )}

                        <div className="d-flex align-items-center gap-4">
                            {/* Mostrar boton de login o de cerrar sesion */}
                            {!isAuth ? (
                                <Nav.Link className="btn-secundario" as={Link} to="/login">
                                    Iniciar Sesión
                                </Nav.Link>
                            ) : (
                                <Button className="btn-secundario" onClick={handleLogout}>
                                    Cerrar Sesión
                                </Button>
                            )}
                            <Link to="/cart" className="cart-link me-3 position-relative" aria-label="Carrito">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />

                                {totalItems > 0 && (
                                    <span className="cart-badge">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
