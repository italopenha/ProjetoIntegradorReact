import React from "react";
import { Drawer, Button, Divider,  Badge, IconButton, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './Cart.css'
import { CartItem, useCart } from "../../hooks/useCart";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

type Anchor = 'right';

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

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor: Anchor) => (
        <div>
            <Divider />
            {cart.map(product => (
                <div key={product.id} className="container-carrinho">
                    <h3>{product?.name}</h3>
                    <img src={product?.image} alt={product?.name} className='imgCart' />
                    <h4>{product.quantityItem}x</h4>

                    <div >
                        <Button
                            className='botoes-carrinho'
                            type="button"
                            disabled={product.quantityItem <= 1}
                            onClick={() => handleProductDecrement(product)}
                        >
                        </Button>
                        <input
                            type="text"
                            readOnly
                            value={product.quantityItem}
                        />
                        <Button
                            className='botoes-carrinho'
                            type="button"
                            data-testid="increment-product"
                            onClick={() => handleProductIncrement(product)}
                        >
                        </Button>
                    </div>
                    <Button
                        className='botoes-carrinho'
                        type="button"
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemoveProduct(product.id)}
                    >
                        Remover
                    </Button>
                    <hr />
                </div>
        ))}
        <Divider />


</div>
);
    return (
    <>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <Typography className='texto-carrinho' >
                            Cesta
                        </Typography>
                        <IconButton aria-label="show 1 new mails" className='icone-carrinho'>
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Button>
                    <Drawer className='tamanho-carrinho' anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        {/* <Grid container >
                        <Grid xs={12} >
                            <Box className="top">
                                <img src="https://i.imgur.com/Z0eAD7f.jpg" alt="legumes" className="img1" />
                                <h2>Carrinho</h2>
                            </Box>
                        </Grid>
        </Grid> */}

           
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
        </> 
    ); 
}

export default Cart;
