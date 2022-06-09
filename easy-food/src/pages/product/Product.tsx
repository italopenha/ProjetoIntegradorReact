import './Product.css';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';

function Product() {

    return (
        <>
            <article className='pagproduto'>
                <section className="parte1">
                    <ul>
                        <li className='titulo'>
                            <p>ABACAXI PEROLA</p>
                        </li>
                        <li className='descricao'>
                            Abacaxi Perola de extrema qualidade, feito sem agrotóxicos e por um agricultor familiar, da horta dele direto para a sua mesa!
                        </li>
                        <li className='descricao2'>
                            Orgânico: Sim
                        </li>
                        <li className='descricao3'>
                            Contém Glúten: Não
                        </li>
                    </ul>
                </section>
                <section className="parte2">
                    <div className="principal" >

                        <div className="content">
                            <div className="slides">

                                <input className="input" type="radio" name="slide" id="slide1" defaultChecked />
                                <input className="input" type="radio" name="slide" id="slide2" />
                                <input className="input" type="radio" name="slide" id="slide3" />
                                <input className="input" type="radio" name="slide" id="slide4" />
                                <input className="input" type="radio" name="slide" id="slide5" />

                                <div className="slide s1">
                                    <img src="https://i.imgur.com/3zMKYWG.png" alt="" />
                                </div>
                                <div className="slide">
                                    <img src="https://i.imgur.com/tg6i5Zx.png" alt="" />
                                </div>
                                <div className="slide">
                                    <img src="https://i.imgur.com/FWqnOZn.png" alt="" />
                                </div>
                                <div className="slide">
                                    <img src="https://i.imgur.com/WYQYqDS.png" alt="" />
                                </div>
                                <div className="slide">
                                    <img src="https://i.imgur.com/gO7vVO3.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="navigation">
                            <label className="bar" htmlFor="slide1"></label>
                            <label className="bar" htmlFor="slide2"></label>
                            <label className="bar" htmlFor="slide3"></label>
                            <label className="bar" htmlFor="slide4"></label>
                            <label className="bar" htmlFor="slide5"></label>

                        </div>
                    </div>
                    <Button className='botaoproduct'>
                            Compre
                    </Button>
                </section>
                <section className='parte3'>
                    <h3>Beneficios do Abacaxi:</h3>
                    <p>O abacaxi pérola traz inúmeros benefícios à saúde, como vitaminas C, A e B1, além de magnésio, cobre, manganês, ferro, fibras e bromelina (enzima associada à diminuição da coagulação sanguínea). Por ser pouco calórico (apenas 52 calorias em 100 gramas do produto), essa fruta é muito indicada para dietas de redução de peso.

                        Além disso, seu consumo pode ajudar a evitar problemas nos olhos, ossos, pele e sistema digestivo, e ajuda ainda a aumentar a imunidade e ameniza as dores pós treino. A casca do abacaxi possui tantos nutrientes quanto sua polpa. Portanto, não a desperdice e utilize a casca também no preparo de chás e sucos. Previne dores de garganta e resfriados e é bom para a circulação por conter a enzima bromelina. É indicado também como tempero para amaciar carnes</p>
                </section>
                <section className="parte4">

                </section>
            </article>
        </>


    )
}

export default Product;