import React from "react";
import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'

function Home() {
    return (
        <>
            <div className="slider">
                <div className="imgBx">
                    <img src="https://i.imgur.com/rXFOxpO.jpeg" alt="legumes" />

                    <img src="https://i.imgur.com/NnaflIS.jpeg" alt="legumes" />

                    <img src="https://i.imgur.com/VPo6cIf.jpeg" alt="legumes" />

                    <img src="https://i.imgur.com/mOpndcc.jpeg" alt="legumes" />

                    <img src="https://i.imgur.com/aCO5coQ.jpeg" alt="legumes" />

                </div>
            </div>

            <Grid container className="gridContainer1">
                <Box className="title">
                    <h2>EasyFood - Comida para todos!</h2>
                </Box>
                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>
                <Grid item xs={4}>
                    <Box>

                    </Box>
                </Grid>

                <Grid item xs={4} className="txtresume">
                    <Box padding={5}>
                        <p>A EasyFood nasceu da necessidade de transformar vidas.
                            Criamos um modelo de Desenvolvimento Social Sustentável,
                            em colaboração direta com pequenos produtores, encurtando
                            a relação entre o produtor e o consumidor.</p>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Box>

                    </Box>
                </Grid>

            </Grid>

            <Grid container className="gridContainer2">
                <Box className="title">
                    <h2>Nossa linha de produtos</h2>
                </Box>
                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>

                <Grid item className="gridImage">

                    <Grid item xs={4} >
                        <Box className="image">
                            <img className="image__img" src="https://i.imgur.com/mOpndcc.jpeg" alt="Frutas" />
                            <div className="image__overlay image__overlay--blur" >
                                <p>Frutas</p>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xs={4} >
                        <Box className="image">
                            <img className="image__img" src="https://i.imgur.com/mOpndcc.jpeg" alt="Verduras" />
                            <div className="image__overlay image__overlay--blur">
                                <p>Verduras</p>
                            </div>

                        </Box>
                    </Grid>

                    <Grid item xs={4} >
                        <Box className="image">
                            <img className="image__img" src="https://i.imgur.com/mOpndcc.jpeg" alt="Sementes" />
                            <div className="image__overlay image__overlay--blur">
                                <p>Sementes</p>
                            </div>

                        </Box>
                    </Grid>

                </Grid>

            </Grid>

            <Grid container className="gridContainer1">
                <Box className="titleVideo">
                    <h2>Curiosidade</h2>
                    <h3>Assista um pequeno vídeo:</h3>
                    <h3>Agricultores familiares produzem 80% da comida do mundo</h3>

                </Box>
                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>

                <Grid item xs={12} >
                    <Box className="video">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/OGFaTo2qUCY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </Box>
                </Grid>

            </Grid>

        </>
    );
}

export default Home;