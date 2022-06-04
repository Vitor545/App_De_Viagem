import React from "react";

const Footer = () => {
    return(
        <footer className="footer section">
            <div className="footer_container container grid">
                <div>
                    <a href="#" className="footer_logo" data-testid='titulo'>
                        App de Viajem <i className='bx bxs-plane-alt'></i>
                    </a>
                    <p className="footer_description" data-testid='description'>               
                        Nossa visão é fazer com que todas as pessoas <br/>
                        tenham a oportunidade de viajar.
                    </p>
                </div>
                <div className="footer_content" >
                    <div data-testid='sobre'>
                        <h3 className="footer_title">
                            Sobre
                        </h3>
                        <ul className="footer_links">
                            <li>
                                <a href="#" className="footer_link">Sobre Nós</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Recursos</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Notícias e Blogs</a>
                            </li>
                        </ul>
                    </div>
                    <div data-testid='empresa'>
                        <h3 className="footer_title">
                            Empresa
                        </h3>
                        <ul className="footer_links">
                            <li>
                                <a href="#" className="footer_link">Como Trabalhamos</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Segurança</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Trabalhe Conosco</a>
                            </li>
                        </ul>
                    </div>
                    <div data-testid='suporte'>
                        <h3 className="footer_title">
                            Suporte
                        </h3>
                        <ul className="footer_links">
                            <li>
                                <a href="#" className="footer_link">Central de Suporte</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">FAQs</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Entre em Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div data-testid='siga'>
                        <h3 className="footer_title">
                            Siga Nós
                        </h3>
                        <ul className="footer_social">
                            <a href="https://github.com/Vitor545" className="footer_social_link" target="_blank" rel="noreferrer">
                                <i className='bx bxl-github' ></i>
                            </a>
                            <a href='http://linkedin.com/in/vitor-souza-da-silva' className="footer_social_link" target='_blank' rel="noreferrer">
                                <i className='bx bxl-linkedin-square' ></i>
                            </a>
                            <a href="http://vitorsouzadasilva.netlify.app/" className="footer_social_link" target='_blank' rel="noreferrer">
                                <i className='bx bx-globe' ></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_info container">
                <span className="footer_copy">
                    &#169; Vitor Souza. Todos os direitos reservados.
                </span>
                <div className="footer_privacy">
                    <a href="#">Termos e regulamentos</a>
                    <a href="#">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;