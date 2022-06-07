import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/Aboutus';
/* import Products from './pages/products/Products'; */
import Contact from './pages/contact/Contact'; 
import Login from './pages/login/Login'; 
import UserRegistration from './pages/userregistration/UserRegistration';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
         
          <Route path="/sobrenos" element={<AboutUs />} />

{/*           <Route path="/produtos" element={<Products />} /> */}

          <Route path="/contato" element={<Contact />} /> 

          <Route path="/login" element={<Login />} />

           <Route path="/cadastrousuario" element={<UserRegistration />} /> 

        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;

