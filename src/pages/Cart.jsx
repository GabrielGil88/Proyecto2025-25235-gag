// Cart.jsx
import React, { useContext } from 'react';
import { Container, Button, Table, FormControl } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import { formatARS } from '../components/FormatARS';
import '../assets/styles/tablas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, removeCart, clearCart, updateQuantity, increase, decrease } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const unit = Number(item.unitPriceWithDiscount ?? item.price ?? 0);
      const qty = Number(item.quantity ?? 0);
      return total + unit * qty;
    }, 0);
  };

  return (
    <Container className="seccion">
      <h2 className="mb-4 top">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover responsive className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Descuento</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => {
                const unitOriginal = Number(item.price ?? 0);
                const discountPercent = Number(item.discountPercent ?? 0);
                const unitWithDiscount = Number(item.unitPriceWithDiscount ?? unitOriginal);
                const subtotal = unitWithDiscount * Number(item.quantity ?? 0);

                return (
                  <tr key={item.id}>
                    <td>
                      <div className="product-cell">
                        {item.image && (
                          <img src={item.image} alt={item.title} className="product-thumb" />
                        )}
                        <div>
                          <div className="product-title">{item.title}</div>
                        </div>
                      </div>
                    </td>

                    <td>{formatARS(unitOriginal)}</td>

                    <td>{discountPercent > 0 ? `${discountPercent}%` : '-'}</td>

                    <td>
                      <div className="qty-controls">
                        <Button
                          className="btn-secundario qty-input"
                          size="sm"
                          onClick={() => decrease(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <FormControl
                          className="qty-input"
                          type="number"
                          min={1}
                          max={item.stock ?? 10}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                        <Button
                          className="btn-secundario qty-input"
                          size="sm"
                          onClick={() => increase(item.id)}
                          disabled={item.quantity >= (item.stock ?? 10)}
                        >
                          +
                        </Button>
                      </div>
                    </td>

                    <td>{formatARS(subtotal)}</td>

                    <td className="text-center align-middle">
                      <Button className="btn-eliminar d-inline-flex align-items-center gap-2" size="sm" onClick={() => removeCart(item.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        <p>Eliminar</p> </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="cart-summary">
            <h5>Total: {formatARS(getTotalPrice())}</h5>
          </div>
          <div className="cart-summary">
            <Button className="btn-secundario" onClick={clearCart}>Vaciar Carrito</Button>
            <Button className="btn-secundario" disabled>Proceder al Pago</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
