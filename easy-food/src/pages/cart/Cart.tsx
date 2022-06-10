import React from "react";
import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import './Cart.css'

function Cart() {
    return (
    <>
        <Grid container >
                        <Grid xs={12} >
                            <Box className="top">
                                <img src="https://i.imgur.com/Z0eAD7f.jpg" alt="legumes" className="img1" />
                                <h2>Carrinho</h2>
                            </Box>
                        </Grid>
        </Grid>

        <div className="container-cart">
        <section id="cart"> 
        <article className="product-cart">
            <header>
            <a id="a" className="remove">
                <img src="https://i.imgur.com/3zMKYWG.png" alt="" style={{}}/> 

                <h3>Remover produto</h3>
            </a>
            </header>

            <div className="content">
            <h1>Abacaxi</h1>
            Abacaxi, Orgânico: Sim, Contém Glúten: Não
            </div>

            <footer className="content">
            <span className="qt-minus">-</span>
            <span className="qt">2</span>
            <span className="qt-plus">+</span>

            <h2 className="full-price">
                r$ 14.80
            </h2>

            <h2 className="price">
                r$ 7.90
            </h2>
            </footer>
        </article>

        <article className="product-cart">
            <header>
            <a id="a" className="remove">
            <img src="https://i.imgur.com/LVsqhvD.png" alt=""/> 
                <h3>Remover produto</h3>
            </a>
            </header>

            <div className="content">
            <h1>Mandioca</h1>
            Mandioca, Orgânico: Sim, Contém Glúten: Não
            </div>

            <footer className="content">
            
            <span className="qt-minus">-</span>
            <span className="qt">1</span>
            <span className="qt-plus">+</span>

            <h2 className="full-price">
                r$ 5.90
            </h2>

            <h2 className="price">
                r$ 5.90
            </h2>
            </footer>
        </article>
        </section>

        </div>

        <footer id="cart-footer">
        <div className="container clearfix">

        <div className="left">
            <h2 className="subtotal">Subtotal: <span>r$ 13.80</span></h2>
            <h3 className="shipping">Frete: <span>r$ 10.00</span></h3>
        </div>

        <div className="right">
            <h1 className="total">Total: <span>23.80</span></h1>
            <a className="btn-cart">Finalizar compra</a>
        </div>

        </div>
        </footer>
        </> 
    ); 
}

export default Cart;
