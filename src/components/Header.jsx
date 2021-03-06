import React from "react";

const Header = () => {
    return(
        <header className="header" >
            <nav className="nav container">
                <a href="#" className="nav_logo" data-testid="logo">
                    Viagem
                    <i className='bx bxs-plane-alt'></i>
                </a>
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link" data-testid="inicio">
                                <i className='bx bx-home-alt-2'></i>
                                <span>Início</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#popular" className="nav_link" data-testid="lugares">
                                <i className='bx bx-map-alt'></i>
                                <span>Lugares</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#value" className="nav_link" data-testid='nossosvalores'>
                                <i className='bx bx-diamond'></i>
                                <span>Nossos Valores</span>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link" data-testid='contato'>
                                <i className='bx bx-phone'></i>
                                <span>Contato</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" data-testid="botãoheader" className="button nav_button">Cadastrar</a>
            </nav>
        </header>
    );
}

export default Header;