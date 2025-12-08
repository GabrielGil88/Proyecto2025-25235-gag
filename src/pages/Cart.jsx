import React, { useContext } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';


const Cart = () => {
    const { cartItems, removeCart, clearCart } = useContext(CartContext);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    return (
        <Container className="seccion">
            <h2 className="mb-4">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (  
                                <tr key={item.id}>  
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => removeCart(item.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h4>Total: ${getTotalPrice().toFixed(2)}</h4>
                    <Button variant="secondary" onClick={clearCart}>
                        Vaciar Carrito
                    </Button>
                </> 
            )}
        </Container>
    );
}
export default Cart;
