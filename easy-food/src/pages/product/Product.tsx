import { Button } from '@material-ui/core';
import './Product.css';

function Product() {

    return (
        <>

            <body className='pagproduct'>
                <section className="parte1product">
                    <ul>
                        <li className='tituloproduct'>
                            ABACAXI PEROLA
                        </li>
                        <li className='descricaoproduct'>
                            Abacaxi Perola de extrema qualidade, feito sem agrotóxicos e por um agricultor familiar, da horta dele direto para a sua mesa!
                        </li>
                        <li className='descricaoproduct'>
                            Orgânico: Sim
                        </li>
                        <li className='descricaoproduct'>
                            Contém Glúten: Não
                        </li>
                    </ul>
                </section>
                <section className="parte2product">
                    <div className="principalproduct" >

                        <div className="contentproduct">
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
                            <label className="bar1" htmlFor="slide1"></label>
                            <label className="bar" htmlFor="slide2"></label>
                            <label className="bar" htmlFor="slide3"></label>
                            <label className="bar" htmlFor="slide4"></label>
                            <label className="bar" htmlFor="slide5"></label>

                            <Button className='botaoproduct'>
                                Comprar
                            </Button>
 
                        </div>
                    </div>
                </section>
                <section className='part3product'>
                    <ul>
                <li className='titleproduct2'>BENEFICIOS DO ABACAXI</li>
                        <li className='descproduct2'>O abacaxi pérola traz inúmeros benefícios à saúde, como vitaminas C, A e B1, além de magnésio, cobre, manganês, ferro, fibras e bromelina (enzima associada à diminuição da coagulação sanguínea). 
                    Por ser pouco calórico (apenas 52 calorias em 100 gramas do produto), essa fruta é muito indicada para dietas de redução de peso.
                    Além disso, seu consumo pode ajudar a evitar problemas nos olhos, ossos, pele e sistema digestivo, e ajuda ainda a aumentar a imunidade e ameniza as dores pós treino. 
                        A casca do abacaxi possui tantos nutrientes quanto sua polpa. </li>
            
                    </ul>

                </section>

            </body>
     
     

        </>
            
    )
}

export default Product;