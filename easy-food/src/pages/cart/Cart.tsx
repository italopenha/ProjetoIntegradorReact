import React from "react";
import { Drawer, Button, Divider, Badge, IconButton, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import './Cart.css'
import { CartItem, useCart } from "../../hooks/useCart";
import NewProductDTO from "../../models/NewProductDTO";


function Cart() {
    const { cart, updateProductAmount, removeProduct } = useCart();

    function handleProductIncrement(product: CartItem) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.quantityItem + 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(product: CartItem) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.quantityItem - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }


    const calculateTotal = (items: CartItem[]) =>
        items.reduce((ack: number, item) => ack + item.quantityItem * item.price, 0);

    return (
        <div className="all-cart" >
            <Grid container >
                <Grid xs={12} >
                    <Box className="top">
                        <img src="https://i.imgur.com/Z0eAD7f.jpg" alt="legumes" className="img1" />
                        <h2>Carrinho</h2>
                    </Box>
                </Grid>
            </Grid>
            <Box  >
                <Box className="products-cart" >
                    {cart.map(product => (
                        <div key={product.id} className="container-cart">
                            <table className="table-products" >
                                <thead>
                                    <tr>
                                        <th className="product-image">&nbsp;</th>
                                        <th className="product-name">Produto</th>
                                        <th className="product-price">Preço</th>
                                        <th className="product-quantity">Quantidade</th>
                                        <th className="product-subtotal">Subtotal</th>
                                        <th className="product-remove">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-image">
                                            <img src={product?.image} alt={product?.name} className='imgCart' />
                                        </td>
                                        <td className="product-name">
                                            <h5>{product?.name}</h5>
                                        </td>
                                        <td className="product-price">
                                            <span>R$ {product?.price}</span>
                                        </td>
                                        <td className="product-quantity">
                                            <h5>{product.quantityItem}</h5>

                                            <div className="btns-qtt">

                                                <Button
                                                    className='button-cart-minus'
                                                    type="button"
                                                    disabled={product.quantityItem <= 1}
                                                    onClick={() => handleProductDecrement(product)}
                                                > -
                                                </Button>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    value={product.quantityItem}
                                                />
                                                <Button
                                                    className='button-cart-plus'
                                                    type="button"
                                                    data-testid="increment-product"
                                                    onClick={() => handleProductIncrement(product)}
                                                > +
                                                </Button>
                                            </div>
                                        </td>
                                        <td className="product-subtotal">
                                            <span>R$ ${(product.price * product.quantityItem).toFixed(2)}</span>
                                        </td>
                                        <td className="product-remove">
                                            <Button
                                                className='btn-remove'
                                                type="button"
                                                variant="outlined"
                                                color="secondary"
                                                onClick={() => handleRemoveProduct(product.id)}
                                            >
                                                Remover
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    ))}
                    <Box>
                        <div className="total-cart">
                            <table className="table-total">
                                <tbody>
                                    <tr className="total-order" >
                                        <th>Valor total da compra</th>
                                        <td>
                                            <span>R$ {calculateTotal(cart).toFixed(2)}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Box>
                    <Box className="btn-cart-back">
                     
                            <Button href="/produtos" className="button-back">
                                Continue Comprando
                            </Button>
             
                    </Box>

                </Box>
            </Box>



            {/* <div className="container-cart">
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
        </footer> */}
        </div>
    );
}

export default Cart;
