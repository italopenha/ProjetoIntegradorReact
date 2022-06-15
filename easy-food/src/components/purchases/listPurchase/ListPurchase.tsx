import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../../../services/Services'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListPurchase.css';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
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
            { 
                purchases.map(purchase => (

                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Compras
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {purchase.items.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {purchase.buyer.email}
                                </Typography>               
                             </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>                                
                                    <Link to={`/deletarcompra/${purchase.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
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
        </>
    )
}

export default ListPurchase;