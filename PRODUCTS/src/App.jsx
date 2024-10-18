import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import ProductForm from './components/ProductForm';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user ? (
            <>
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addProduct" element={<ProductForm />} /> {/* Default route */}
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
