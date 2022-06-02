import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;

