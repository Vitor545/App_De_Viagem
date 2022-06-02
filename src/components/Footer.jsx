import React from "react";

const Footer = () => {
    return(
        <footer className="footer section">
            <div className="footer_container container grid">
                <div>
                    <a href="#" className="footer_logo">
                        App de Viajem <i className='bx bxs-plane-alt'></i>
                    </a>
                    <p className="footer_description">
                        Our vision is to make all people <br/> 
                        the best place to live for them.
                    </p>
                </div>
                <div className="footer_content">
                    <div>
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
                    <div>
                        <h3 className="footer_title">
                            Empresa
                        </h3>
                        <ul className="footer_links">
                            <li>
                                <a href="#" className="footer_link">Como Nós Trabalhamos</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Segurança</a>
                            </li>
                            <li>
                                <a href="#" className="footer_link">Trabalhe Conosco</a>
                            </li>
                        </ul>
                    </div>
                    <div>
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
                    <div>
                        <h3 className="footer_title">
                            Siga Nós
                        </h3>
                        <ul className="footer_social">
                            <a href="github.com/Vitor545" className="footer_social_link" target="_blank">
                                <i className='bx bxl-github' ></i>
                            </a>
                            <a href='linkedin.com/in/vitor-souza-da-silva' className="footer_social_link" target='_blank'>
                                <i className='bx bxl-linkedin-square' ></i>
                            </a>
                            <a href="vitorsouzadasilva.netlify.app/" className="footer_social_link" target='_blank'>
                                <i className='bx bx-globe' ></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_info_container">
                <span className="footer_copy">
                    &#169; Vitor Souza da Silva. Todos os direitos reservados.
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