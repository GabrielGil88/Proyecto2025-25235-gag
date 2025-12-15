import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';

const Ofertas = () => {
  return (
    <Container className="seccion">
      <h2 className="mb-4">🔥 Ofertas 🔥</h2>
      <ProductList onlyDiscounted />
    </Container>
  );
};

export default Ofertas;
