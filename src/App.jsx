import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminLogs from './pages/AdminLogs';
import Checkout from './pages/Checkout'; 
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';

const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : 'https://jersey-backend-i8bz.onrender.com';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch inventory from server');
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching live data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddProduct = async (formDataPayload) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`, {
        method: 'POST',
        body: formDataPayload
      });
      
      if (!response.ok) throw new Error('Failed to add product to database');
      const savedProduct = await response.json();
      
      setProducts((prev) => [savedProduct, ...prev]);
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Could not sync product addition with database.');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete product from database');
      
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Could not sync removal request with database.');
    }
  };

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, selectedSize, nextQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: nextQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, selectedSize) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === selectedSize))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const filteredProducts = products.filter((product) => {
    if (!product) return false;
    const matchesName = product.name ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const matchesCategory = product.category ? product.category.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    return matchesName || matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar cartCount={totalCartItems} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow w-full pt-16">
        <Routes>
          <Route 
            path="/" 
            element={<Home products={filteredProducts} onAddToCart={handleAddToCart} productsLoading={loading} />} 
          />
          <Route 
            path="/shop" 
            element={<Shop products={filteredProducts} onAddToCart={handleAddToCart} productsLoading={loading} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetails products={products} onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path="/about" 
            element={<AboutUs />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
          <Route 
            path="/faq" 
            element={<FAQ />} 
          />
          <Route 
            path="/terms" 
            element={<TermsOfService />} 
          />
          <Route 
            path="/privacy" 
            element={<PrivacyPolicy />} 
          />
          <Route 
            path="/admin-logs" 
            element={
              <AdminLogs 
                products={products} 
                onAddProduct={handleAddProduct} 
                onDeleteProduct={handleDeleteProduct} 
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                cart={cart} 
                onUpdateQuantity={handleUpdateQuantity} 
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart} 
              />
            } 
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}