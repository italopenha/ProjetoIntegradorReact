import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './Aboutus.css';

function AboutUs() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='fundo'>
                <Grid alignItems="center" item xs={6}>
                    <Box padding={5} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto">SOBRE NÓS</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className="texto2">A EasyFood nasceu da necessidade de transformar vidas. Criamos um modelo de Desenvolvimento Social Sustentável, em colaboração direta com pequenos produtores, encurtando a relação entre o produtor e o consumidor. Além de gerar renda para as famílias atendidas, desenvolvemos o potencial de cada região de acordo com as matérias-primas locais e garantimos que os alimentos sejam produzidos com altos padrões de saúde, ambientais e éticos.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/aCO5coQ.jpeg" alt="" className="imagem" />
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box padding={5} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto">O QUE DEFENDEMOS?</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className="texto2">Em todo o mundo, alimentos mais do que suficientes são produzidos para alimentar a população global, mas cerca de 811 milhões de pessoas ainda passam fome. A fome está fortemente interconectada com a pobreza e envolve interações entre uma série de fatores sociais, políticos e demográficos.
                            Os pequenos agricultores familiares produzem mais de 70% da oferta global de alimentos. No entanto, a pobreza extrema também continua concentrada nas áreas rurais e é um dos principais impulsionadores da fome, com mais de ¾ dos extremamente pobres vivendo em áreas rurais.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/VPo6cIf.jpeg" alt="" className="imagem" />
                </Grid>
            </Grid>
        </>

    )

}

export default AboutUs;