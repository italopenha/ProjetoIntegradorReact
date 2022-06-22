import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewProductDTO from '../../../models/NewProductDTO';
import { search } from '../../../services/Services'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListProduct.css';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';


function ListProduct() {

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
        <Box className='alingcards-listproducts'>
            {
                products.map(product => (
                    <Box m={2} >
                        <Card variant="outlined" className='card-listproducts'>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2" className='nameproduct-list'>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" component="p" className='priceproduct-list'>
                                    {product.price}
                                </Typography>
                                <Typography variant="body2" component="p" className='priceproduct-list'>
                                    {product.image}
                                </Typography>
                                <Typography variant="body2" component="p" className='priceproduct-list'>
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" component="p" className='priceproduct-list'>
                                    {product.quantity}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" mb={1.5} className='alingbtn-listproducts'>

                                    <Link to={`/cadastrarproduto/${product.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained"  className='btn-updateproducts' >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarproduto/${product.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className='btn-deleteproducts'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
         </Box>   
        </>
    )
}

export default ListProduct;