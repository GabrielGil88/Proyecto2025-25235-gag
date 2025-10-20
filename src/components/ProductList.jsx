import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null, descuento = 0, limit = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);


  const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
  };



  if (loading) {
    return <div>Cargando...</div>;
  }

  const productosMostrados = limit ? products.slice(0, limit) : products;

  return (
    <Row>
      {productosMostrados.map((product) => (
        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={product.id} className="mb-4">
          <ProductCard
            product={product}
            agregarAlCarrito={handleAgregarAlCarrito}
            descuento={descuento}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;