import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletePurchase.css';
import { useNavigate, useParams } from 'react-router-dom';
import { searchId, deleteId } from '../../../services/Services';
import { Box } from '@mui/material';
import NewPurchaseDTO from '../../../models/NewPurchaseDTO';
import useLocalStorage from "react-use-localstorage";

function DeletePurchase() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [purchase, setPurchase] = useState<NewPurchaseDTO>()
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        searchId(`/api/Purchases/id/${id}`, setPurchase, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/listacompras')
        deleteId(`/api/Purchases/delete/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Compra deletada com sucesso');
    }

    function nao() {
        navigate('/listacompras')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a compra:
                            </Typography>
                            <Typography color="textSecondary" >
                                {purchase?.nameItems}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletePurchase;