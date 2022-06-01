import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img className="nav-logo" src="https://i.imgur.com/FyqHkFH.png" alt="Imagem Tela Inicial"/>
                        <div className="mobile-menu">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <ul className="nav-list">
                            <li>
                                <a href="/">Inicio</a>
                            </li>
                            <li>
                                <a href="/">Sobre</a>
                            </li>
                            <li>
                                <a href="/">Produtos</a>
                            </li>
                            <li>
                                <a href="/">Contato</a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://i.imgur.com/rBljdCZ.png" alt=""/>
                                </ a>    
                            </li>
                        </ul>
                </nav>
            </header>

            <script src="assets/index.js"></script>

        </>
    )
}

export default Navbar;