import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, Button } from '@material-ui/core';
import { Box, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Services";
import AuthenticationDTO from "../../models/AuthenticationDTO";
import './Login.css';
import { toast } from "react-toastify";

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [authenticationDTO, setAuthenticationDTO] = useState<AuthenticationDTO>(
        {
            email: "",
            password: "",
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setAuthenticationDTO({
            ...authenticationDTO,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){

        e.preventDefault();
        
        try {
            await login(`/api/Authentication`, authenticationDTO, setToken);
            toast.success('Login efetuado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            }) 
        } catch (error) {
            toast.error('E-mail ou senha inválidos, tente novamente!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }

    useEffect(() => {

        if(token !== ''){
            navigate('/home');
        }

    }, [token, navigate]);

    return (
        <Grid container className="login-background" direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box className="logo-register-user">
                     <img src="https://i.imgur.com/lcsP9kH.png" alt="" className="logo-img"/>
                </Box>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='seja-bem-vindo'>Bem-Vindo(a)!</Typography>
                        <Typography variant='h6' gutterBottom component='h6' align='center' className='digite-email-senha'>Digite seu e-mail e senha para entrar</Typography>
                        
                        <TextField
                            value={authenticationDTO.email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='email' variant='outlined' color="success" name='email' margin='normal' fullWidth/>

                        <TextField
                            value={authenticationDTO.password}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='password' label='senha' variant='outlined' color="success" name='password' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className="btn-entrar">
                                Entrar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className="nao-tem-uma-conta">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrarusuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='btn-cadastre-se'>Cadastre-se</Typography>
                        </Link> 
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img-login'>

            </Grid>
        </Grid>
    );
}

export default Login;