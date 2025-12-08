import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollTotop';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CrudProductos from './components/CrudProductos';
import Productos from './pages/Productos';
import Ofertas from './pages/Ofertas';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Footer from './components/Footer'
import { CartProvider } from './components/CartProvider';

function App() {

  return (
    <CartProvider>
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/crud" element={<CrudProductos />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  )
}

export default App
