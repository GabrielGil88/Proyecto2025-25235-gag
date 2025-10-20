import React from 'react';
import ProductList from '../components/ProductList';
import { Container } from 'react-bootstrap';

const Ofertas = () => {
  return (
    <Container className="seccion">
      <h2>Ofertas en ropa de hombre</h2>
      <ProductList category="men's clothing" descuento={10} />
      <h2>Ofertas en ropa de mujer</h2>
      <ProductList category="women's clothing" descuento={25} />
    </Container>
  );
};

export default Ofertas;
