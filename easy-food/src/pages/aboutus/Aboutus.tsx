import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './Aboutus.css';

function AboutUs() {
    return (
        <>
            <Grid container className='grid-container-1'>

                <img src="https://i.imgur.com/JAuoaOn.png" alt="logo-easy-food" className='logo' />

                <Box className="sobre-a-easy-food">
                    <h2>Sobre a Easy Food</h2>
                </Box>

                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>

                <Grid item xs={6}>
                    <Box>

                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box padding={5}>
                        <p className="txt-sobre">A EasyFood nasceu da necessidade de transformar vidas. Criamos um modelo de Desenvolvimento Social Sustentável, em colaboração direta com pequenos produtores, encurtando a relação entre o produtor e o consumidor. Além de gerar renda para as famílias atendidas, desenvolvemos o potencial de cada região de acordo com as matérias-primas locais e garantimos que os alimentos sejam produzidos com altos padrões de saúde, ambientais e éticos.</p>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box>

                    </Box>
                </Grid>

            </Grid>

            <Grid container className='grid-images'>
                <Box>
                    <img src="https://i.imgur.com/IsdbZmP.jpeg" alt="legumes" className='img' />
                </Box>
                <Box>
                    <img src="https://i.imgur.com/1LwQagt.jpeg" alt="legumes" className='img' />
                </Box>
                <Box>
                    <img src="https://i.imgur.com/pEVyHOP.jpeg" alt="frutas" className='img' />
                </Box>
            </Grid>

            <Grid container className="grid-container-2">
                <Box className="o-que-defendemos">
                    <h2>O que Defendemos?</h2>
                </Box>

                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>

                <Grid item xs={6}>
                    <Box padding={5}>
                        <p className="txt-defendemos">Em todo o mundo, alimentos mais do que suficientes são produzidos para alimentar a população global, mas cerca de 811 milhões de pessoas ainda passam fome. A fome está fortemente interconectada com a pobreza e envolve interações entre uma série de fatores sociais, políticos e demográficos.
                            Os pequenos agricultores familiares produzem mais de 70% da oferta global de alimentos. No entanto, a pobreza extrema também continua concentrada nas áreas rurais e é um dos principais impulsionadores da fome, com mais de ¾ dos extremamente pobres vivendo em áreas rurais.</p>
                    </Box>
                </Grid>

            </Grid>

        </>

    )

}

export default AboutUs;