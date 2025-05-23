import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import CartScreen from './components/screens/CartScreen';
import ProductScreen from './components/screens/ProductScreen';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
