import React from "react";
import { Button, Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import './Cart.css'
import { CartItem, useCart } from "../../hooks/useCart";


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
        <>
            <Grid container >
                <Grid xs={12} >
                    <Box className="top">
                        <img src="https://i.imgur.com/Z0eAD7f.jpg" alt="legumes" className="img1" />
                        <h2>Carrinho</h2>
                    </Box>
                </Grid>
            </Grid>
            <Box  >
                <Box className="all-cart">
                    {cart.map(product => (
                        <div key={product.id} >
                            <div className="container-cart">
                                <section className="cart">
                                    <div className="product-cart">
                                        <header>
                                            <a className="remove">
                                                <img className='img-cart' src={product?.image} alt={product?.name} />
                                                <div className='remove-cart' onClick={() => handleRemoveProduct(product.id)} >
                                                    <img src="https://i.imgur.com/NONLPwe.png" />
                                                </div>
                                            </a>
                                        </header>

                                        <div className="product-name-cart">
                                            <h1>{product?.name}</h1>
                                            {product?.description}
                                        </div>

                                        <div className="btns-qntt-cart">
                                            <Button
                                                className="qt-minus-cart"
                                                type="button"
                                                disabled={product.quantityItem <= 1}
                                                onClick={() => handleProductDecrement(product)}
                                            > -
                                            </Button>
                                            <span className="qt-cart">{product.quantityItem}</span>

                                            <Button
                                                className="qt-plus-cart"
                                                type="button"
                                                data-testid="increment-product"
                                                onClick={() => handleProductIncrement(product)}
                                            > +
                                            </Button>

                                            <h2 className="full-price-cart">
                                                R$ ${(product.price * product.quantityItem).toFixed(2)}
                                            </h2>

                                            <h2 className="price-cart">
                                                R$ {(product?.price).toFixed(2)}
                                            </h2>
                                        </div>

                                    </div>
                                </section>
                            </div>
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
            <Box className="banner-cart" >
                <img src="https://i.imgur.com/er1JGes.png" alt="banner" />
            </Box>
        </>
    );
}

export default Cart;
