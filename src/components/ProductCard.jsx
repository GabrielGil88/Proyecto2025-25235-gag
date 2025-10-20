import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, agregarAlCarrito, descuento = 0 }) => {

  const descuentoInt = Number(descuento) || 0; 
  const tieneDescuento = descuentoInt > 0;

  const precio = Number(product.price) || 0;
  const precioConDescuento = tieneDescuento
    ? Number((precio * (1 - descuentoInt / 100)).toFixed(2))
    : precio;

    return (
        <Card className="product-card h-100 shadow-sm border-0 rounded-4 overflow-hidden d-flex flex-column"
            tabIndex="0">
            <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ height: '300px', objectFit: 'scale-down' }}
            />

            <Card.Body className="d-flex flex-column justify-content-between p-3">
                <div>
                    <div className="d-flex align-items-center mb-2">
                        {tieneDescuento && (
                            <span className="badge bg-danger me-2">
                                -{descuento}% OFF
                            </span>
                        )}
                        <Card.Title className="fw-semibold text-dark mb-0 text-truncate">
                            {product.title}
                        </Card.Title>
                    </div>

                    <Card.Text className="text-muted small mb-3">
                        {product.description.slice(0, 100)}...
                    </Card.Text>
                </div>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                    {tieneDescuento ? (
                        <div className="text-center">
                            <div className="text-muted ">
                                <del>{'$' + precio.toFixed(2)}</del>
                            </div>
                            <div className="fw-bold fs-5">
                                {'$' + precioConDescuento.toFixed(2)}
                            </div>
                        </div>
                    ) : (
                        <Card.Text className="fw-bold fs-5 mb-0">
                            {'$' + precio.toFixed(2)}
                        </Card.Text>
                    )}

                    <Button                        
                        className="btn-primario px-4 ms-4 d-flex align-items-center justify-content-center gap-2"
                        onClick={() => agregarAlCarrito(product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Agregar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
