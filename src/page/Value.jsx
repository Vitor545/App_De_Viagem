import React from "react";
import Values from '../img/value.jpg';

const Value = () => {
    return(
        <section className="value section" id="value">
            <div className="value_container container grid">
                <div className="values_images">
                    <div className="value_orbe"></div>
                    <div className="value_img">
                        <img src={ Values } alt="" />
                    </div>
                </div>
                <div className="value_content">
                    <div className="value_data">
                        <span className="section_subtitle">Nossos Valores</span>
                        <h2 className="section_title">
                            Valor que damos a você<span>.</span>
                        </h2>
                        <p className="value_description">
                            Estamos sempre prontos para ajudar, fornecendo o melhor serviço para você.
                            Acreditamos que todos merecem viajar por um preço justo e com qualidade.
                        </p>
                    </div>
                    <div className="value_accordion">
                        <div className="value_accordion_item">
                            <header className="value_accordion_header">
                                <i className='bx bxs-shield-x value_accordion_icon'></i>
                                <h3 className="value_accordion_title">
                                    As melhores taxas de juros do mercado
                                </h3>
                                <div className="value_accordion_arrow">
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                            </header>
                            <div className="value_accordion_content">
                                <p className="value_accordion_description">
                                O preço que fornecemos é o melhor para você,
                                garantimos nenhuma alteração de preço em sua viajem devido
                                a vários custos inesperados que podem surgir.
                                </p>
                            </div>
                        </div>
                        <div className="value_accordion_item">
                            <header className="value_accordion_header">
                                <i className='bx bxs-x-square value_accordion_icon'></i>
                                <h3 className="value_accordion_title">
                                    Prevenir preços instáveis
                                </h3>
                                <div className="value_accordion_arrow">
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                            </header>
                            <div className="value_accordion_content">
                                <p className="value_accordion_description">
                                O preço que fornecemos é o melhor para você,
                                garantimos nenhuma alteração de preço em sua viajem devido
                                a vários custos inesperados que podem surgir.
                                </p>
                            </div>
                        </div>
                        <div className="value_accordion_item">
                            <header className="value_accordion_header">
                                <i className='bx bxs-bar-chart-square value_accordion_icon'></i>
                                <h3 className="value_accordion_title">
                                    Segurança dos seus dados
                                </h3>
                                <div className="value_accordion_arrow">
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                            </header>
                            <div className="value_accordion_content">
                                <p className="value_accordion_description">
                                O preço que fornecemos é o melhor para você,
                                garantimos nenhuma alteração de preço em sua viajem devido
                                a vários custos inesperados que podem surgir.
                                </p>
                            </div>
                        </div>
                        <div className="value_accordion_item">
                            <header className="value_accordion_header">
                                <i className='bx bxs-check-square value_accordion_icon' ></i>
                                <h3 className="value_accordion_title">
                                    Segurança dos seus dados
                                </h3>
                                <div className="value_accordion_arrow">
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                            </header>
                            <div className="value_accordion_content">
                                <p className="value_accordion_description">
                                O preço que fornecemos é o melhor para você,
                                garantimos nenhuma alteração de preço em sua viajem devido
                                a vários custos inesperados que podem surgir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Value;