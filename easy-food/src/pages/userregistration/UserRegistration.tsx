import React, { ChangeEvent, useEffect, useState }  from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userRegistration } from "../../services/Services";
import UserRegisterDTO from "../../models/UserRegisterDTO";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import './UserRegistration.css';

function UserRegistration () {

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
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert(error)
                alert('erro no formulário, tente novamente!')
            }

        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        
                        <TextField
                            value={userRegisterDTO.email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='Email' variant='outlined' name='email' margin='normal' type='email' fullWidth />

                        <TextField
                            value={userRegisterDTO.name}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth />
                        
                        <TextField
                            value={userRegisterDTO.password}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        
                        
                        <TextField
                            value={confirmPassword} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmPasswordHandle(e)}
                            id='confirmPassword' label='Confirmar Senha' variant='outlined' name='confirmPassword' margin='normal' type='password' fullWidth />
                        
                        <FormControl 
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant="outlined">
                            <InputLabel htmlFor="outlined-age-native-simple">tipo</InputLabel>
                            <Select
                            value={userRegisterDTO.type}
                            native
                            label="Tipo"
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

                        <TextField
                            value={userRegisterDTO.address}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='address' label='Endereço' variant='outlined' name='address' margin='normal' fullWidth />
                        
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Button type='submit' variant='contained' className="buttonColor1">
                                        Cadastrar
                                </Button>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default UserRegistration;