import React from 'react';
import ProductList from './ProductList';

const Infaltables = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Inflatables</h2>
            <ProductList category="jewelery" />
        </div>
    );
}

export default Infaltables;