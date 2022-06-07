import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeleteProduct.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Product from '../../../model/Product';
import { buscaId, deleteId } from '../../../servicos/Servicos';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeleteProduct() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [post, setPosts] = useState<Product>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

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
        buscaId(`/api/Product/id/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/product')
        deleteId(`/api/Product/delete/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert('Produto deletado com sucesso');
    }

    function nao() {
        navigate('/product')
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
                                {post?.titulo}
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