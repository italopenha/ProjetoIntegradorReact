import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../../../services/Services'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListPurchase.css';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/tokensReducer';
import NewPurchaseDTO from '../../../models/NewPurchaseDTO';

function ListPurchase() {

    const [purchases, setPurchases] = useState<NewPurchaseDTO[]>([]);
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getPurchase() {
        await search("/api/ListPurchase", setPurchases, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPurchase()

    }, [purchases.length])

    return (
        <>
            {
                purchases.map(purchase => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Compras
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {purchase.emailBuyer}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {purchase.nameItems}
                                </Typography>               
                             </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>                                
                                    <Link to={`/deletePurchase/${purchase.id}`} className="text-decorator-none">
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