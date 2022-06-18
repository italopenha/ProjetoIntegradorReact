import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { post, put, searchId } from '../../../services/Services';
import NewProductDTO from '../../../models/NewProductDTO';
import './RegisterProducts.css';
import useLocalStorage from 'react-use-localstorage';
import { TextField } from '@mui/material';


function RegisterProducts() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');

    const [product, setProduct] = useState<NewProductDTO>({
        id: 0,
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
        console.log("product " + JSON.stringify(product))

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
        navigate('/listaprodutos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" component="h1" align="center" className='btn-cadastro-produtos'>Cadastro de Produtos</Typography>
                <TextField value={product.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="name" label="Nome" variant="outlined" name="name" margin="normal" color="success" fullWidth />
                <TextField value={product.price} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="price" label="Preço" variant="outlined" name="price" margin="normal" color="success" fullWidth />
                <TextField value={product.image} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="image" label="Imagem" variant="outlined" name="image" margin="normal" color="success" fullWidth />
                <TextField value={product.description} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="description" label="Descrição" variant="outlined" name="description" margin="normal" color="success" fullWidth />
                <TextField value={product.quantity} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduct(e)} id="quantity" label="Quantidade" variant="outlined" name="quantity" margin="normal" color="success" fullWidth />

                <Button type="submit" variant="contained" className='btn-reg-admin'>
                    Cadastrar
                </Button>
                <Button href='/admin' variant="contained" className='btn-reg-admin back-admin'>
                    Voltar
                </Button>
            </form>
        </Container>
    )
}

export default RegisterProducts;