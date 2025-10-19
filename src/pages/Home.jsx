import React from 'react';
import ProductList from '../components/ProductList';
import ClimaWidget from '../components/ClimaWidget';

const Home = () => {
  return (
    <div>
      <ClimaWidget />
      <div className="container">
        <h2 className="">Web de incio</h2>
      </div>
    </div>
  );
};

export default Home;