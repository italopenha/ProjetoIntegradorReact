import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer id='footer_principal'>
                <section>
                    <article>
                        <h2>CONTATO</h2>
                        <p>Horário de atendimento: 08 - 17 hrs</p>
                        <p>Endereço: Rua da Glória, 19304</p>
                        <p>Telefone: (xx) 0000 - 0000</p>
                        <p>Email: atendimento@EasyFood.com </p>
                    </article>
                    <article>
                        <h2>LINKS ÚTEIS</h2>
                        <ul id= 'menu'>
                            <li>
                                <a href="/home">Inicio</a>
                            </li>
                            <li>
                                <a href="/about">Sobre</a>
                            </li>
                            <li>
                                <a href="/products">Produtos</a>
                            </li>
                            <li>
                                <a href="/contact">Contato</a>
                            </li>
                            <li>
                                <a href="/login" >Login</a>
                            </li>
                        </ul>
                    </article>
                    <article>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 40, color: "#ECE7B4"}} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "#ECE7B4"}} />
                            </a>
                            <a href="https://www.linkedin.com/school/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "#ECE7B4"}} />
                            </a>
                    </article>
                </section>
                <footer>
                    <h5>
                        Direitos reservados: EasyFood &copy;
                    </h5>
                </footer>
            </footer>
        </>
    )   
}

 export default Footer;