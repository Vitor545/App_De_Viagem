import React from "react";
import ContactImg from '../img/contact.jpg';

const Contact = () => {
    return(
        <section className="contact section" id="contact">
            <div className="contact_container container grid">
                <div className="contact_images">
                   <div className="contact_orbe"></div>
                   <div className="contact_img">
                        <img src={ContactImg} alt="Imagem de uma cidade e um mar" />
                   </div>
                </div>
                <div className="contact_content">
                    <div className="contact_data">
                        <span className="section_subtitle">Entre em contato</span>
                        <h2 className="section_title">
                            Fácil de entrar em contato conosco<span>.</span>
                        </h2>
                        <p className="contact_description">
                            Há algum problema em encontrar a viajem dos seus sonhos? Necessita de um
                            guia na escolha de uma viajem? ou precisa de uma ajuda para conseguir uma passagem mais barata?
                            basta entrar em contato conosco.
                        </p>
                    </div>
                    <div className="contact_card">
                        <div className="contact_card_box">
                            <div className="contact_card_info">
                                <i className='bx bxs-phone-call'></i>
                                <div>
                                    <h3 className="contact_card_title">
                                        Telefone
                                    </h3>
                                    <p className="contact_card_description">
                                        319991545721
                                    </p>
                                </div>
                            </div>
                            <button className="button contact_card_button">
                                Telefonar Agora
                            </button>
                        </div>
                        <div className="contact_card_box">
                            <div className="contact_card_info">
                                <i className='bx bxs-message-rounded-dots' ></i>
                                <div>
                                    <h3 className="contact_card_title">
                                        Bate Papo
                                    </h3>
                                    <p className="contact_card_description">
                                        319991545721
                                    </p>
                                </div>
                            </div>
                            <button className="button contact_card_button">
                                Conversar Agora
                            </button>
                        </div>
                        <div className="contact_card_box">
                            <i className='bx bxs-video' ></i>
                            <div className="contact_card_info">
                                <div>
                                    <h3 className="contact_card_title">
                                        Chamada de Video
                                    </h3>
                                    <p className="contact_card_description">
                                        319991545721
                                    </p>
                                </div>
                            </div>
                            <button className="button contact_card_button">
                                Chamada Agora
                            </button>
                        </div>
                        <div className="contact_card_box">
                            <i className='bx bxs-envelope' ></i>
                            <div className="contact_card_info">
                                <div>
                                    <h3 className="contact_card_title">
                                        Mensagem
                                    </h3>
                                    <p className="contact_card_description">
                                        319991545721
                                    </p>
                                </div>
                            </div>
                            <button className="button contact_card_button">
                                Mensagem Agora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;