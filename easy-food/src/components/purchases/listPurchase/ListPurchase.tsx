import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../../../services/Services'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListPurchase.css';
import { useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material';
import useLocalStorage from "react-use-localstorage";
import PurchaseModel from '../../../models/PurchaseModel';

function ListPurchase() {

    const [purchases, setPurchases] = useState<PurchaseModel[]>([]);
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getPurchase() {
        await search("/api/Purchases/list", setPurchases, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPurchase()

    }, [purchases.length])

    return (
        <> {console.log(purchases)}
        <Box className='alinhar-cards-lista-compras'>
            {
                purchases.map(purchase => (

                    <Box m={2} sx={{ display: 'inline-block', mx: '10px', transform: 'scale(1)' }}>
                        <Card variant="outlined" className='card-lista-compras'>
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    Compras
                                </Typography>
                                <Typography variant="h5" component="h2" className='txt-lista-compras-nome'>
                                    {purchase.items.name}
                                </Typography>
                                <Typography variant="body2" component="p" className='txt-lista-compras-email'>
                                    {purchase.buyer.email}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/deletarcompra/${purchase.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='btn-deletar'>
                                                deletar
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

export default ListPurchase;