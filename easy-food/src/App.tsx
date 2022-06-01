import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>

      <Route path="/home" element={<Home />} />

      <Route path="/sobrenos" element={<SobreNos />} />

      <Route path="/produtos" element={<Produtos />} />

      <Route path="/contato" element={<Contato />} />

      <Route path="/login" element={<Login />} />

      <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
    </Routes>
    <Footer 
    
    />
  </Router>
  );
}

export default App;
