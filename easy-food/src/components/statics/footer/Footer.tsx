import './Footer.css';

function Footer() {
    return (
        <>
            <footer id='footer_principal'>
                <header>
                    <img src="https://i.imgur.com/uLG82dK.png" alt="Logo" height='200px;' />
                </header>
                <section>
                    <article>
                        <h2>Contato</h2>
                        <p>Endereço: Rua da Glória, 19304</p>
                        <p>Telefone: 0000 - 0000</p>
                        <p>Horário: 08 hrs - 17 hrs</p>
                    </article>
                    <article>
                        <h2>Menu</h2>
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Produtos</li>
                            <li>Contato</li>
                        </ul>
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