import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewProductDTO from '../../models/NewProductDTO';
import { search } from '../../services/Services';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './Products.css';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { useCart } from '../../hooks/useCart';

function Products() {

    const [products, setProducts] = useState<NewProductDTO[]>([]);
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');


    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getProduct() {
        await search("/api/Products/list", setProducts, {
            headers: {
                'Authorization': token
            }
        })
    }
    const { addProduct } = useCart();

    function handleAddCart(productId: number) {
        addProduct(productId)
    }

    useEffect(() => {

        getProduct()

    }, [products.length])



    return (
        <>
            <Grid container >
                <Grid xs={12} >
                    <Box className="top">
                        <img src="https://i.imgur.com/Z0eAD7f.jpg" alt="legumes" className="img1" />
                        <h2>Produtos</h2>
                    </Box>
                </Grid>
                <Grid xs={12} className="main-categories" >
                    <Box className="top-categories">
                        <div className='container-prod' >
                            <div className="row">
                                <div className="slider-items">
                                    <div className="title-categories">
                                        <h2>Nossos Produtos</h2>
                                    </div>

                                    <div className="imgs-categories-in">
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">                                                    
                                                        <img src="https://i.imgur.com/tg6i5Zx.png" alt="Frutas" />                                                  
                                                    <div className="img-info">
                                                        <span>Frutas</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">                                            
                                                        <img src="https://i.imgur.com/ujgxfUU.jpg" alt="Verduras" />                                                  
                                                    <div className="img-info">
                                                        <span>Verduras</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">                                               
                                                        <img src="https://i.imgur.com/nseSVu9.png" alt="Legumes" />                                                  
                                                    <div className="img-info">
                                                        <span>Legumes</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">                                                
                                                        <img src="https://i.imgur.com/niyNsNl.png" alt="Grãos" />                                               
                                                    <div className="img-info">
                                                        <span>Grãos</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Box>
                </Grid>

            </Grid>


            <Box className='alinhamento'>
                {
                    products.map(product => (
                        <Box m={2} className="section2" >
                            <Card variant="outlined" className='cardproducts'>
                                <CardContent className='card-content'>
                                    <img src={product.image} className="imageProducts"></img>
                                    <Typography variant="h5" component="h2" className='nameProducts'>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='priceProducts'>
                                        R$ {product.price}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='priceProducts'>
                                       Quantidade: {product.quantity}
                                    </Typography>
                                </CardContent>
                                <Box display="flex" justifyContent="center" mb={1.5} className="alingbtn">
                                    <Link to={`/carrinho`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant='contained' className="btn-products" onClick={() => handleAddCart(product.id)} >
                                                Adicionar ao carrinho
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </Card>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default Products;