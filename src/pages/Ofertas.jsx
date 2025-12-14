import React from 'react';
import ProductList from '../components/ProductList';

const Ofertas = () => {
  return (
    <section className="seccion">
      <h2 className="mb-4">🔥 Ofertas</h2>
      <ProductList onlyDiscounted />
    </section>
  );
};

export default Ofertas;
