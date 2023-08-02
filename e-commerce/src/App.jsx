import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage"
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { getAllProducts, getCartItems } from "./services/products-services"
import { useEffect, useState } from 'react';
import ProductPage from './pages/ProductPage/ProductPage';
import NavBar from './components/NavBar/NavBar';
import SearchResultLoader from './components/SearchResultLoader/SearchResultLoader';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const [products, setProducts] = useState([]);
  useEffect (() => {
    getAllProducts()
      .then((productData) => setProducts(productData))
      .catch((err) => console.log(err));
  }, []);

  const [cart, setCart] = useState([]);
  useEffect (() => {
    getCartItems()
      .then((itemData) => setCart(itemData))
      .catch((err) => console.log(err));
  }, []);

  return (
  <>
    <BrowserRouter>
      <NavBar products={products}/>
      <Routes>
        <Route exact path="/" element={<LandingPage products={products}/>} />
        <Route path="/products" element={<ProductsPage products={products} />} />
        <Route path="products/:id" element={<ProductPage products={products} />} />
        <Route path="/search/:searchTerm" element={<SearchResultLoader products={products}/>} />
        <Route path="products/:id/cart" element={<CartPage cart={cart}/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
