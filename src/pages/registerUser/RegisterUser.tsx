import React, { ChangeEvent, useEffect, useState }  from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userRegistration } from "../../services/Services";
import UserRegisterDTO from "../../models/UserRegisterDTO";
import { Grid, Typography, Button, InputLabel, Select, Box, TextField, FormControl } from "@mui/material";
import './RegisterUser.css';
import { toast } from "react-toastify";

function RegisterUser () {

    let navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState<String>("")

    const [userRegisterDTO, setUserRegisterDTO] = useState<UserRegisterDTO>(
        {   
            email: "",
            name: "",
            password: "",
            type: "",
            address: ""
          
        }
    );

    const [userResult, setUserResult] = useState<UserRegisterDTO>(
        {
            email: "",
            name: "",
            password: "",
            type: "",
            address: ""
        }
    );

    useEffect(() => {

        if(userResult.email?.includes("@")){
            navigate('/login');
        }

    }, [userResult, navigate]);

    function confirmPasswordHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setUserRegisterDTO({
            ...userRegisterDTO,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){

        e.preventDefault();
        
        if(confirmPassword === userRegisterDTO.password){
            try {
                await userRegistration(`/api/Users`, userRegisterDTO, setUserResult)
                toast.success('Cadastro realizado com sucesso!', {
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
                toast.error('Usuário já cadastrado, tente outro e-mail!', {
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

        } else {
            toast.error('Dados inconsistentes, tente novamente!', {
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

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='register-user-background'>
            <Grid item xs={6} className='img-register-user'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box className="logo-register-user">
                     <img src="https://i.imgur.com/lcsP9kH.png" alt="" className="logo-img"/>
                </Box>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='cadastre-se'>Cadastre-se</Typography>
                        
                        <TextField className="formulariocadastro"
                            value={userRegisterDTO.email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='Email' variant='outlined' color="success" name='email' margin='normal' type='email' fullWidth />

                        <TextField className="formulariocadastro"
                            value={userRegisterDTO.name}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='name' label='Nome' variant='outlined' color="success" name='name' margin='normal' fullWidth />
                        
                        <TextField className="formulariocadastro"
                            value={userRegisterDTO.password}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='password' label='Senha' variant='outlined' color="success" name='password' margin='normal' type='password' fullWidth />
                        
                        
                        <TextField className="formulariocadastro"
                            value={confirmPassword} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
                            id='confirmPassword' label='Confirmar Senha' variant='outlined' color="success" name='confirmPassword' margin='normal' type='password' fullWidth />
                        
                        <FormControl 
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant="outlined" color="success" fullWidth  className="tipoUsuario">
                            <InputLabel htmlFor="outlined-age-native-simple"  className="tipoUsuario2">Tipo de Usuário</InputLabel>
                            <Select
                            value={userRegisterDTO.type}
                            native
                            label="Tipo de Usuário"
                            inputProps={{
                                name: 'type',
                                id: 'outlined-age-native-simple',
                            }}
                            >
                            <option aria-label="None" value="" />
                            <option value="REGULAR">Regular</option>
                            <option value="VULNERABILITY">Vulnerabilidade</option>
                            </Select>
                        </FormControl>

                        <TextField className="formulariocadastro"
                            value={userRegisterDTO.address}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='address' label='Endereço' variant='outlined' color="success" name='address' margin='normal' fullWidth/>
                        
                        <Grid container direction="row" justifyContent="space-between" alignItems="center"  className="tipoUsuario">
                                <Button type='submit' variant='contained' className="btn-cadastrar">
                                        Cadastrar
                                </Button>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RegisterUser;