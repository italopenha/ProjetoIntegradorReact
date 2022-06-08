import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeleteProduct.css';
import { useNavigate, useParams } from 'react-router-dom';
import NewProductDTO from '../../../models/NewProductDTO';
import { searchId, deleteId } from '../../../services/Services';
import { Box } from '@mui/material';
import useLocalStorage from "react-use-localstorage";

function DeleteProduct() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<NewProductDTO>()
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
        searchId(`/api/Product/id/${id}`, setProduct, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/listaprodutos')
        deleteId(`/api/Product/delete/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Produto deletado com sucesso');
    }

    function nao() {
        navigate('/listaprodutos')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Produto:
                            </Typography>
                            <Typography color="textSecondary" >
                                {product?.name}
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
export default DeleteProduct;