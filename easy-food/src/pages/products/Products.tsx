import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewProductDTO from '../../models/NewProductDTO';
import { search } from '../../services/Services';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './Products.css';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';

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
                                        <h2>Categorias</h2>
                                    </div>

                                    <div className="imgs-categories-in">
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">
                                                    <a href="/" >
                                                        <img src="https://i.imgur.com/tg6i5Zx.png" alt="Frutas" />
                                                    </a>
                                                    <div className="img-info">
                                                        <a href="/">Frutas</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">
                                                    <a href="/">
                                                        <img src="https://i.imgur.com/ujgxfUU.jpg" alt="Verduras" />
                                                    </a>                                                    
                                                    <div className="img-info">
                                                        <a href="/">Verduras</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">
                                                    <a href="/">
                                                        <img src="https://i.imgur.com/nseSVu9.png" alt="Legumes" />
                                                    </a>                                                    
                                                    <div className="img-info">
                                                        <a href="/">Legumes</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="imgs-item">
                                            <div className="item">
                                                <div className="img-main">
                                                    <a href="/">
                                                        <img src="https://i.imgur.com/niyNsNl.png" alt="Grãos" />
                                                    </a>                                                    
                                                    <div className="img-info">
                                                        <a href="/">Grãos</a>
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



            {
                products.map(product => (
                    <Box m={2} className="section2" >
                        <Card variant="outlined">
                            <CardContent>
                            <img src={product.image}></img>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {product.price}
                                </Typography>
                                <Typography className="img-products" variant="body2" component="p">
                                  
                                </Typography>
                               
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/cadastrarproduto/${product.name}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${product.name}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                Adiconar ao carrinho
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                    
                ))
            }
        </>
    )
}

export default Products;