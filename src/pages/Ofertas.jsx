import React from 'react';
import ProductList from '../components/ProductList';

const Ofertas = () => {
  return (
    <div className="container">
      <h2>Ofertas en ropa de hombre</h2>
      <ProductList category="men's clothing" descuento={10} />
      <h2>Ofertas en ropa de mujer</h2>
      <ProductList category="women's clothing" descuento={25} />
    </div>
  );
};

export default Ofertas;
