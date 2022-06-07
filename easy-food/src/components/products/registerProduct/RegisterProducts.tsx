import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { post, put, searchId } from '../../../services/Services';
import NewProductDTO from '../../../models/NewProductDTO';
import './RegisterProducts.css';


function RegisterProducts() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [product, setProduct] = useState<NewProductDTO>({
        name: '',
        price: 0,
        image: '',
        description: '',
        quantity: 0,
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await searchId(`/api/Products/id/${id}`, setProduct, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduct(e: ChangeEvent<HTMLInputElement>) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/api/Products`, product, setProduct, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso!');
        } else {
            post(`/api/Products`, product, setProduct, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso!');
        }
        back()
    }

    function back() {
        navigate('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de Produtos</Typography>
                <TextField value={product.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="name" label="Nome" variant="outlined" name="name" margin="normal" fullWidth />
                <TextField value={product.price} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="price" label="Preço" variant="outlined" name="price" margin="normal" fullWidth />
                <TextField value={product.image} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="image" label="Imagem" variant="outlined" name="image" margin="normal" fullWidth />
                <TextField value={product.description} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="description" label="Descrição" variant="outlined" name="description" margin="normal" fullWidth />
                <TextField value={product.quantity} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="quantity" label="Quantidade" variant="outlined" name="quantity" margin="normal" fullWidth />

                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        </Container>
    )
}

export default RegisterProducts;