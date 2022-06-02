import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img className="nav-logo" src="https://i.imgur.com/FyqHkFH.png" alt="Imagem Tela Inicial"/>
                        <ul className="nav-list">
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/sobrenos">Sobre</a>
                            </li>
                            <li>
                                <a href="/">Produtos</a>
                            </li>
                            <li>
                                <a href="/">Contato</a>
                            </li>
                            <li>
                                <a href="/login">
                                    <img src="https://i.imgur.com/rBljdCZ.png" alt=""/>
                                </ a>    
                            </li>
                        </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;