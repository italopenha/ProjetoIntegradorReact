import { Button } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import UserRegisterDTO from "../../models/UserRegisterDTO";
import { post } from '../../services/Services';
import './Admin.css'

function Admin() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    return (
        <div className="admin-page">
            <Box >
                <Box className="title-admin" >
                    Funções do Administrador
                </Box>
                <Box>

                    <Link to={`/cadastrarproduto`} className="text-decorator-none" >
                        <Box mx={1}>

                            <Button variant="contained" className="btns-admin"  >
                                Cadastrar Produto
                            </Button>
                        </Box>

                    </Link>
                    <Link to={`/listaprodutos`} className="text-decorator-none" >
                        <Box mx={1}>
                            <Button variant="contained" className="btns-admin">
                                Lista de Produtos
                            </Button>
                        </Box>
                    </Link>
                    <Link to={`/listacompras`} className="text-decorator-none">
                        <Box mx={1}>
                            <Button variant="contained" className="btns-admin">
                                Lista de Compras
                            </Button>
                        </Box>
                    </Link>
                </Box>

            </Box>
        </div>
    )
}

export default Admin;