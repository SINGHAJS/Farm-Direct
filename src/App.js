import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainHeader from './components/Navigation/MainNavigation';

import HomePage from './pages/HomePage/HomePage';
import FarmsPage from './pages/FarmsPage/FarmsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import FarmProductsPage from './pages/FarmProductsPage/FarmProductsPage';
import SelectedProductPage from './pages/SelectedProductPage/SelectedProductPage';

const App = () => {
  return (
    <Router>
      <MainHeader />
      <div style={{ margin: '0px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/farms" element={<FarmsPage />} exact />
          <Route path="/farms/:id" element={<FarmProductsPage />} exact />
          <Route
            path="/farms/:id/:pid"
            element={<SelectedProductPage />}
            exact
          />
          <Route path="/products" element={<ProductsPage />} exact />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
