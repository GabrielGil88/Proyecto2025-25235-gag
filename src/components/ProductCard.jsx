import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from './CartContext';
import { formatARS } from './FormatARS';


const ProductCard = ({ product, descuento = 0 }) => {
    const { addCart } = useContext(CartContext);

    const precio = Number(product.price) || 0;

    const productDiscount = Number(product.discount || 0);
    const descuentoInt = productDiscount > 0 ? productDiscount : (Number(descuento) || 0);

    const descuentoSeguro = Math.min(Math.max(descuentoInt, 0), 100);

    const tieneDescuento = descuentoSeguro > 0;

    const precioConDescuento = tieneDescuento
        ? Number((precio * (1 - descuentoSeguro / 100)).toFixed(2))
        : precio;

    const descripcionCorta = (product.description || '').slice(0, 100);

    const title = product.title || 'Producto sin título';

    const stock = product.stock;
    const sinStock = stock === 0; // solo es "sin stock" cuando stock === 0



    return (
        <Card className="product-card border-0 rounded-4 overflow-hidden d-flex flex-column"
            tabIndex="0"
            aria-label={title}>
            <Card.Img
                variant="top"
                src={product.image}
                alt={title}
                className="img-fluid p-3"
                style={{ maxHeight: '200px', objectFit: 'contain', width: '100%' }}
            />

            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex align-items-center mb-2">
                        {tieneDescuento && (
                            <span className="badge bg-success me-2">
                                -{descuentoSeguro}% OFF
                            </span>
                        )}
                        <Card.Title className="fw-semibold text-dark mb-0 text-truncate">
                            {title}
                        </Card.Title>
                    </div>

                    <Card.Text className="text-muted small mb-3">
                        {descripcionCorta}{descripcionCorta.length >= 100 ? '...' : ''}
                    </Card.Text>
                </div>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                    {tieneDescuento ? (
                        <div className="text-center">
                            <div className="text-muted ">
                                <del>{formatARS(precio)}</del>
                            </div>
                            <div className="fw-bold fs-5">
                                {formatARS(precioConDescuento)}
                            </div>
                        </div>
                    ) : (
                        <Card.Text className="fw-bold fs-5 mb-0">
                            {formatARS(precio)}
                        </Card.Text>
                    )}

                    {sinStock ? (
                        <span className="text-danger fw-bold ms-4">Sin stock</span>
                    ) : (
                        <Button
                            className="btn-primario px-4 ms-4 d-flex align-items-center justify-content-center gap-2"
                            onClick={() => addCart(product)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Agregar
                        </Button>
                    )}

                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
