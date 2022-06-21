import React from "react";
import { Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'

function Home() {
    return (
        <>
        <body className='home-principal'>
            
        
            <div className="slider">
                <div className="imgBx">
                    <img src="https://i.imgur.com/Yr9h6qJ.png" alt="legumes" />

                    <img src="https://i.imgur.com/LkTvuaK.png" alt="legumes" />

                    <img src="https://i.imgur.com/W9idXb7.png" alt="legumes" />

                    <img src="https://i.imgur.com/2264YPU.png" alt="legumes" />

                    <img src="https://i.imgur.com/Y4zyHxa.jpeg" alt="legumes" />

                </div>
            </div>

            <Grid container className="gridContainer1">
                <Box className="title">
                    <h2>EasyFood - Comida para todos!</h2>
                </Box>
                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>
               

                <Grid item xs={6} className="txtresume">
                    <Box padding={5}>
                        <p>A EasyFood nasceu da necessidade de transformar vidas. Criamos um modelo de Desenvolvimento Social Sustentável, em colaboração direta com pequenos produtores, encurtando a relação entre o produtor e o consumidor.
                        </p>
                        <p>Além de gerar renda para as famílias atendidas, desenvolvemos o potencial de cada região de acordo com as matérias-primas locais e garantimos que os alimentos sejam produzidos com altos padrões de saúde, ambientais e éticos.
                        </p>
                        <p>A nossa iniciativa visa apoiar a agricultura sustentável, capacitar pequenos agricultores, acabar com a pobreza rural, garantir aos mais vulneráveis segurança alimentar e combater as mudanças climáticas, tudo isso em uma plataforma só!
                        </p>
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

                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/tg6i5Zx.png" alt="Frutas" />
                                <div className="image__overlay image__overlay--blur" >
                                    <p>Frutas</p>
                                </div>
                            </a>
                        </Box>
                    </Grid>

                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/ujgxfUU.jpg" alt="Verduras" />
                                <div className="image__overlay image__overlay--blur">
                                    <p>Verduras</p>
                                </div>
                            </a>

                        </Box>
                    </Grid>

                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/nseSVu9.png" alt="Legumes" />
                                <div className="image__overlay image__overlay--blur">
                                    <p>Legumes</p>
                                </div>
                            </a>

                        </Box>
                    </Grid>

                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/niyNsNl.png" alt="Grãos" />
                                <div className="image__overlay image__overlay--blur">
                                    <p>Grãos</p>
                                </div>
                            </a>

                        </Box>
                    </Grid>

                </Grid>

            </Grid>

            <Grid container className="gridContainer1">
                <Box className="titleVideo">
                    <h2>Curiosidade</h2>
                </Box>
                <Box className="arabesco">
                    <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                </Box>
                <Box className="txt-video">
                    <p>Você sabia que mais de 70% da produção mundial de alimentos é produzida por agricultores familiares?</p>
                    <p>Assista o vídeo a seguir das Nações Unidas e descubra um pouco mais!</p>
                    
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
        </body>
        </>
    );
}

export default Home;