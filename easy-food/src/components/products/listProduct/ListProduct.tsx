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
            {
                products.map(product => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {product.price}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {product.image}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {product.quantity}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/cadastrarproduto/${product.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarproduto/${product.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
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
        </>
    )
}

export default ListProduct;