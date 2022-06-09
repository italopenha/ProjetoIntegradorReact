import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './Aboutus.css';

function Aboutus() {
    return (
        <>
            <Grid container className='grid-container-1'>

                <img src="https://i.imgur.com/JAuoaOn.png" alt="logo-easy-food" className='logo' />

                <Box>
                    <Typography className="sobre-a-easy-food">Sobre a Easy Food</Typography>
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
                        <Typography className="txt-sobre">A EasyFood nasceu da necessidade de transformar vidas. Criamos um modelo de Desenvolvimento Social Sustentável, em colaboração direta com pequenos produtores, encurtando a relação entre o produtor e o consumidor. Além de gerar renda para as famílias atendidas, desenvolvemos o potencial de cada região de acordo com as matérias-primas locais e garantimos que os alimentos sejam produzidos com altos padrões de saúde, ambientais e éticos.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box>

                    </Box>
                </Grid>

            </Grid>

            <Grid container className='grid-images'>
                <Box>
                    <img src="https://i.imgur.com/dKegUPU.png" alt="fluxograma-1" className='fluxogramas' />
                </Box>
                <Box>
                    <img src="https://i.imgur.com/ChnouKf.png" alt="fluxograma-2" className='fluxogramas' />
                </Box>
            </Grid>

            <Grid container className="grid-container-2">
                <Box>
                    <Typography className="o-que-defendemos">O que Defendemos?</Typography>
                </Box>

                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>

                <Grid item xs={6}>
                    <Box padding={5}>
                        <Typography className="txt-o-que-defendemos">Em todo o mundo, alimentos mais do que suficientes são produzidos para alimentar a população global, mas cerca de 811 milhões de pessoas ainda passam fome. A fome está fortemente interconectada com a pobreza e envolve interações entre uma série de fatores sociais, políticos e demográficos.
                            Os pequenos agricultores familiares produzem mais de 70% da oferta global de alimentos. No entanto, a pobreza extrema também continua concentrada nas áreas rurais e é um dos principais impulsionadores da fome, com mais de ¾ dos extremamente pobres vivendo em áreas rurais.</Typography>
                    </Box>
                </Grid>
            </Grid>

        </>

    )

}

export default Aboutus;