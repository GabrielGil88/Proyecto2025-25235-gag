import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, agregarAlCarrito }) => {
    return (
        <Card className="h-100 shadow-sm border-0 rounded-4 px-2 pt-3 overflow-hidden d-flex flex-column">
            <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ height: "300px", objectFit:"scale-down" }}
            />

            <Card.Body className="d-flex flex-column justify-content-between p-3">
                <div>
                    <Card.Title className="fw-semibold text-dark mb-2 text-truncate">
                        {product.title}
                    </Card.Title>
                    <Card.Text className="text-muted small mb-3">
                        {product.description.slice(0, 100)}...
                    </Card.Text>
                </div>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Card.Text className="fw-bold text-primary fs-5 mb-0">
                        ${product.price}
                    </Card.Text>
                    <Button
                        variant="primary"
                        size="sm"
                        className="px-3 fw-semibold"
                        onClick={() => agregarAlCarrito(product)}
                    >
                        Agregar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
