import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, FormControl, FormHelperText, MenuItem } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import NewProductDTO from '../../../models/NewProductDTO';
import useLocalStorage from 'react-use-localstorage';
import NewPurchaseDTO from '../../../models/NewPurchaseDTO';
import { search, searchId, post, put, } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function RegisterPurchase() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<NewProductDTO[]>([]);
    const [emailBuyer, setEmailBuyer] = useLocalStorage('email');
    const [nameItems, setNameItems] = useLocalStorage('name');
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [product, setProduct] = useState<NewProductDTO>({
        name: '',
        price: 0,
        image: '',
        description: '',
        quantity: 0
    })

    const [purchase, setPurchase] = useState<NewPurchaseDTO>({
        emailBuyer: {
            email: (emailBuyer),
        },
        nameItems: null
    })

    useEffect(() => { 
        setPurchase({
            ...purchase,
            nameItems: product
        })
    }, [product])

    useEffect(() => {
        getProduct()
        if (id !== undefined) {
            findByIdPurchase(id)
        }
    }, [id])

    async function getProduct() {
        await search("/api/Products", setProduct, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPurchase(id: string) {
        await searchId(`/api/Purchases/id/${id}`, setPurchase, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/api/Purchases`, purchase, setPurchase, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Compra atualizada com sucesso');
        } else {
            post(`/api/Purchases`, purchase, setPurchase, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Compra cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/listacompras')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={purchase.emailBuyer} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={purchase.nameItems} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => searchId(`/api/Products/id/${e.target.value}`, setProducts, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default RegisterPurchase;