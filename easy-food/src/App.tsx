import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import DeletePurchase from './components/purchases/deletePurchase/DeletePurchase';
import DeleteProduct from './components/products/deleteProduct/DeleteProduct';
import Aboutus from './pages/aboutus/Aboutus';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import './App.css';
import RegisterProducts from './components/products/registerProduct/RegisterProducts';
import ListProduct from './components/products/listProduct/ListProduct';
import ListPurchase from './components/purchases/listPurchase/ListPurchase';
import RegisterUser from './pages/registerUser/RegisterUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/sobrenos" element={<Aboutus />} />

            <Route path="/produtos" element={<Products />} />

            <Route path="/contato" element={<Contact />} />

            <Route path="/cadastrarusuario" element={<RegisterUser />} />

            <Route path="/cadastrarproduto" element={<RegisterProducts />} />

            <Route path="/cadastrarproduto/:id" element={<RegisterProducts />} />

            <Route path="/deletarcompra/:id" element={<DeletePurchase />} />

            <Route path="/deletarproduto/:id" element={<DeleteProduct />} />

            <Route path="/listaprodutos" element={<ListProduct />} />

            <Route path="/listacompras" element={<ListPurchase />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>

  );
}

export default App;

