import React from 'react';
import ProductList from '../components/ProductList';
import {Container} from 'react-bootstrap';

const Productos = () => {
  return (
    <Container className="my-5 gap-5 d-flex flex-column">
      <h2>Todos los productos</h2>
      <ProductList />
    </Container>
  );
};

export default Productos;