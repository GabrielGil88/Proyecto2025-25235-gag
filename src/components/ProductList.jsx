// ProductList.jsx (con MockAPI + FakeStore)
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const API_URL = "https://6924d4c582b59600d72184e2.mockapi.io/Products";
const FAKE_API = "https://fakestoreapi.com/products";

const normalize = (s = '') => s.toString().toLowerCase().trim();

const ProductList = ({ category = null, descuento = 0, limit = null, onlyDiscounted = false }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1) Tus productos MockAPI
        const mockRes = await fetch(API_URL);
        const mockData = await mockRes.json();

        // 2) Productos FakeStoreAPI
        const fakeRes = await fetch(FAKE_API);
        const fakeData = await fakeRes.json();

        // 3) Normalizo y agrego IDs únicos
        const mockNormalized = mockData.map((p) => ({
          ...p,
          id: `mock-${p.id}`,          // <<< --- ID ÚNICO
          category: normalize(p.category || ''),
          source: 'mock',
          price: Number(p.price) || 0,
          discount: Number(p.discount || 0),
          stock: Number(p.stock || 0),
        }));

        const fakeNormalized = fakeData.map((p) => ({
          ...p,
          id: `fake-${p.id}`,          // <<< --- ID ÚNICO
          category: normalize(p.category || ''),
          source: 'fake',
          discount: Number(p.discount || 0),
        }));

        // 4) Unir las listas
        let allProducts = [...mockNormalized, ...fakeNormalized];

        // 5) Filtrar por categoría
        if (category) {
          const catNorm = normalize(category);
          allProducts = allProducts.filter((p) => p.category === catNorm);
        }

        setProducts(allProducts);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <div>Cargando productos...</div>;

  let productosFiltrados = products;

  // filtrar solo ofertas (si aplica)
  if (onlyDiscounted) {
    productosFiltrados = productosFiltrados.filter(
      (p) => Number(p.discount) > 0
    );
  }

  // aplicar límite (si aplica)
  const productosMostrados = limit
    ? productosFiltrados.slice(0, limit)
    : productosFiltrados;


  return (
    <Row>
      {productosMostrados.map((product) => (
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          key={`${product.id}`}
          className="mb-4"
        >
          <ProductCard
            product={product}
            addCart={() => alert(`Producto ${product.title} agregado`)}
            descuento={descuento}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
