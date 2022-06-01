import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className='toolbar' >
                    <Box className='cursor' >
                        <img src="https://i.imgur.com/uLG82dK.png" alt="" width="275px" />
                    </Box>

                    <Box className='menu' >
                        <Box mx={1} className='cursor' >
                            <Typography className='txtMenu'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' >
                            <Typography className='txtMenu' >
                                Sobre Nós
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' >
                            <Typography className='txtMenu' >
                                Produtos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor' >
                            <Typography className='txtMenu' >
                                Contato
                            </Typography>         
                        </Box>
                        
                        <Box borderRadius="50%" marginLeft="20px" className='cursor' >
                            <img src="https://i.imgur.com/rBljdCZ.png" alt="" width="40px" />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;