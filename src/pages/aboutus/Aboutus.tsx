import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './Aboutus.css';

function Aboutus() {
    return (
        <>
            <Grid container >

                <Grid item className='grid-container-1'>

                    <img src="https://i.imgur.com/JAuoaOn.png" alt="logo-easy-food" className='logo' />

                    <Box>
                        <Typography className="sobre-a-easy-food">Sobre a EasyFood</Typography>
                    </Box>

                    <Box className="arabesco">
                        <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                    </Box>

                    <Grid item xs={8} className="txt-sobre">
                        <Box padding={2} >
                            <p>
                                Em todo o mundo, alimentos mais do que suficientes são produzidos para alimentar a população global, mas cerca de 811 milhões de pessoas ainda passam fome. A fome está fortemente interconectada com a pobreza e envolve interações entre uma série de fatores sociais, políticos e demográficos.
                            </p>
                        </Box>
                        <Box padding={2} >
                            <p>
                                Apesar dos pequenos agricultores familiares produzirem mais de 70% da oferta global de alimentos, a pobreza extrema continua concentrada nas áreas rurais, e é um dos principais impulsionadores da fome, com mais de ¾ dos extremamente pobres vivendo em áreas rurais.
                            </p>
                        </Box>
                        <Box padding={2} >
                            <p>
                                A prosperidade nas áreas rurais e remotas é um fator chave para segurança alimentar e extinção da fome. E o comércio eletrônico possui um enorme potencial para melhorar os padrões de vida das pessoas que vivem nestas áreas, que é o principal aspecto social da segurança alimentar.
                            </p>
                        </Box>
                        <Box padding={2} >
                            <p>
                                Foi assim que nasceu a EasyFood, uma plataforma facilitadora e pautada no modelo de Desenvolvimento Social Sustentável, responsável por conectar os agricultores familiares aos consumidores.
                            </p>
                        </Box>
                    </Grid>
                </Grid>


                <Grid item className='grid-images1'>
                    <Box className='fluxograma-sobre'>
                        <img src="https://i.imgur.com/dKegUPU.png" alt="fluxograma-1" className='fluxogramas' />
                    
                        <img src="https://i.imgur.com/ChnouKf.png" alt="fluxograma-2" className='fluxogramas' />

                    </Box>
                </Grid>

                <Grid item className='grid-images2'>
                    <Box className='fluxograma-sobre'>
                        <img src="https://i.imgur.com/41e5Y2S.png"  alt="fluxograma-1" className='fluxogramas' />
                    
                        <img src= "https://i.imgur.com/M7OLoe2.png"  alt="fluxograma-2" className='fluxogramas4' />

                    </Box>
                </Grid>
                <Grid item className='grid-container-1-b'>
                    <Grid item xs={2}>
                        <Box>

                        </Box>
                    </Grid>

                    <Grid item xs={8} className="txt-sobre">
                        <Box padding={5} >
                            <p className='txt-sobreabout'>
                                Segundo estudos, o preço de venda dos produtos nas plataformas de e-commerce é 43,7% superior ao dos distribuidores nas lojas tradicionais. Como resultado, os produtores podem vender seus produtos de maior qualidade diretamente para consumidores e ganhar mais, ao mesmo tempo, os compradores recebem produtos mais saudáveis e com preços mais baixos em relação aos das lojas físicas.
                            </p>
                        </Box>
                    </Grid>

                    <Grid item xs={2}>
                        <Box>

                        </Box>
                    </Grid>

                </Grid>

                <Grid item className="grid-container-2">
                    <Box>
                        <Typography className="o-que-defendemos">Nossos Produtores</Typography>
                    </Box>
                    <Box className="arabesco">
                        <img src="https://i.imgur.com/ZbNFKLz.png" alt="" />
                    </Box>

                    <Grid item xs={2}>
                        <Box>

                        </Box>
                    </Grid>

                    <Grid item xs={8}>
                        <Box padding={5}>
                            <p className="txt-o-que-defendemos">Nossos agricultores são cuidadosamente escolhidos e treinados para trabalhar na prática de técnicas agrícolas ecológicas. Do solo livre de produtos químicos aos grãos colhidos a dedo - tudo o que você vê é cultivado organicamente para fornecer o produto da mais alta qualidade. Verificamos a qualidade do solo, padrão de cultivo, rotação de culturas predominante e os níveis de nutrientes no solo.
                            </p>
                        </Box>

                        <Box className='cx-geral-esq' >
                            <Box className='cx-esq-ind' >
                                <Box className='cx-esq-interno' >
                                    <Box className='icones'>
                                        <img src="https://i.imgur.com/2vQ2CTs.png" alt="sementes" />
                                    </Box>
                                    <h2>
                                        <span>Sementes</span>
                                    </h2>
                                    <Box className='txt-icones' >
                                        <p>Os agricultores recebem uma compensação para garantir que nenhuma semente geneticamente modificada seja colocada em uso.</p>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='cx-esq-ind' >
                                <Box className='cx-esq-interno seta-pontilhada' >
                                    <Box className='icones'>
                                        <img src="https://i.imgur.com/1JTTzLB.png" alt="análise de solo" />
                                    </Box>
                                    <h2>
                                        <span>Análise de Solo</span>
                                    </h2>
                                    <Box className='txt-icones' >
                                        <p>O solo é testado para confirmar a ausência de produtos químicos.</p>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='cx-esq-ind' >
                                <Box className='cx-esq-interno' >
                                    <Box className='icones'>
                                        <img src="https://i.imgur.com/Xhz8Rm2.png" alt="colheita" />
                                    </Box>
                                    <h2>
                                        <span>Colheita</span>
                                    </h2>
                                    <Box className='txt-icones' >
                                        <p>As colheitas só são colhidas após atingirem a plena maturidade e os produtos obtidos são armazenados num ambiente totalmente higiénico.</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>
            </Grid>
        </>

    )

}

export default Aboutus;