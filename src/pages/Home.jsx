import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import ClimaWidget from '../components/ClimaWidget';
import OfertasCarrusel from '../components/OfertasCarrusel';
import Elegirnos from '../components/Elegirnos';


const Home = () => {
  return (
    <div>
      <ClimaWidget />
      <OfertasCarrusel />
      <Container className="seccion">
        <h2>Productos destacados</h2>
        <ProductList category="electronics" limit={4} />
        <Elegirnos/>
        <Button
          href="/productos"
          className="btn-primario mt-4 d-block mx-auto"
        >
          Ver todos los productos
        </Button>
      </Container>
    </div>
  );
};

export default Home;