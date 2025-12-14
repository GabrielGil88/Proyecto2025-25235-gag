// Cart.jsx
import React, { useContext } from 'react';
import { Container, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import { CartContext } from '../components/CartContext';
import { formatARS } from '../components/FormatARS'; // ajusta la ruta si hace falta

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
                    <td>{item.title}</td>
                    <td>{formatARS(unitOriginal)}</td>
                    <td>{discountPercent > 0 ? `${discountPercent}%` : '-'}</td>
                    <td style={{ minWidth: '180px' }}>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => decrease(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>

                        <InputGroup className="mx-2" style={{ width: '80px' }}>
                          <FormControl
                            type="number"
                            min={1}
                            max={item.stock ?? 10}
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                          />
                        </InputGroup>

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => increase(item.id)}
                          disabled={item.quantity >= (item.stock ?? 10)}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>{formatARS(subtotal)}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={() => removeCart(item.id)}>Eliminar</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <h4>Total: {formatARS(getTotalPrice())}</h4>
          <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
