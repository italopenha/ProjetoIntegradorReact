import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';

function Footer() {

    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        setId('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    return (
        <>
            <footer id='footer_principal'>
                <section className='section-footer' >
                    <article className='footer-texto'>
                        <h2>CONTATO</h2>
                        <p>Horário de atendimento: 08 - 17 hrs</p>
                        <p>Endereço: Rua da Glória, 19304</p>
                        <p>Telefone: (xx) 0000 - 0000</p>
                        <p>Email: atendimento.easyfood@gmail.com </p>
                    </article>
                    <article className='footer-texto' >
                        <h2>LINKS</h2>
                        <ul id= 'menu'>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/sobrenos">Sobre</a>
                            </li>
                            <li>
                                <a href="/produtos">Produtos</a>
                            </li>
                            <li>
                                <a href="/contato">Contato</a>
                            </li>
                            <li>
                                <a href="/carrinho">Carrinho</a>
                            </li>
                            <li>
                                <a href="/login" >Login</a>
                            </li>
                            <li onClick={goLogout}>
                                Logout                            
                            </li>
                        </ul>
                    </article>
                    <article className='icons'>
                            <a href='https://grillogui.github.io/PortfolioGrupo3DotNet1/index.html'>
                                <FolderIcon style={{ fontSize: 40, color: "#ECE7B4"}} />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 40, color: "#ECE7B4"}} />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "#ECE7B4"}} />
                            </a>
                    </article>
                </section>
                <footer className='footer-texto' >
                    <h5>
                        Direitos reservados: EasyFood &copy;
                    </h5>
                </footer>
            </footer>
        </>
    )   

}
 export default Footer;