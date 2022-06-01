import React from "react";
import Popular1 from '../img/popular1.jpg';
import Popular2 from '../img/popular2.jpg';
import Popular3 from '../img/popular3.jpg';
import Popular4 from '../img/popular4.jpg';
import Popular5 from '../img/popular5.jpg';

const Popular = () => {
    return(
        <section className="popular section" id="popular">
            <div className="container">
                <span className="section_subtitle">Faça sua escolha</span>
                <h2 className="section_title">
                    Lugares Populares<span>.</span>
                </h2>
                <div className="popular_container swiper mySwiper">
                    <div className="swiper-wrapper">
                        <article className="popular_card swiper-slide">
                            <img
                                src={Popular1}
                                alt="Imagem mostrar um homem em um barco em Siargao (Siargao Island)"
                                className="popular_img"
                            />
                            <div className="popular_data">
                                <h2 className="popular_price">
                                    <span>R$</span>5599,00
                                </h2>
                                <h3 className="popular_title">
                                    Siargao island, Filipinas
                                </h3>
                                <p className="popular_description">
                                    Siargao é uma ilha no mar de Filipinas,
                                    situada 800 km a sudeste de Manila.
                                </p>
                            </div>
                        </article>
                        <article className="popular_card swiper-slide">
                            <img
                                src={Popular2}
                                alt="Imagem mostrar uma das estradas de Valley of Fire State Park, United States"
                                className="popular_img"
                            />
                            <div className="popular_data">
                                <h2 className="popular_price">
                                    <span>R$</span>4299,00
                                </h2>
                                <h3 className="popular_title">
                                    Valley of Fire State Park, Estados Unidos
                                </h3>
                                <p className="popular_description">
                                    O Valley of Fire State Park está localizado em Nevada,
                                    nos Estados Unidos da América.
                                </p>
                            </div>
                        </article>
                        <article className="popular_card swiper-slide">
                            <img
                                src={Popular3}
                                alt="Imagem mostrar uma visão panorâmica de Dubai"
                                className="popular_img"
                            />
                            <div className="popular_data">
                                <h2 className="popular_price">
                                    <span>R$</span>5531,00
                                </h2>
                                <h3 className="popular_title">
                                    Dubai, Cidade nos Emirados Árabes Unidos
                                </h3>
                                <p className="popular_description">
                                    Dubai é uma cidade e um emirado dos Emirados Árabes Unidos conhecida
                                    pelos shoppings e prédios de luxo.
                                </p>
                            </div>
                        </article>
                        <article className="popular_card swiper-slide">
                            <img
                                src={Popular4}
                                alt="Imagem mostrar uma estrada e um navio em Lake Thun, Switzerland"
                                className="popular_img"
                            />
                            <div className="popular_data">
                                <h2 className="popular_price">
                                    <span>R$</span>3931,00
                                </h2>
                                <h3 className="popular_title">
                                    Lago Thun, Suíça
                                </h3>
                                <p className="popular_description">
                                    O lago de Thun ou lago Thun é um lago no Oberland Bernês, na Suíça.
                                </p>
                            </div>
                        </article>
                        <article className="popular_card swiper-slide">
                            <img
                                src={Popular5}
                                alt="Imagem mostrar diversas casas em Santorini, Greece."
                                className="popular_img"
                            />
                            <div className="popular_data">
                                <h2 className="popular_price">
                                    <span>R$</span>6931,00
                                </h2>
                                <h3 className="popular_title">
                                    Santorini, Grécia
                                </h3>
                                <p className="popular_description">
                                    Santorini é uma das ilhas Cíclades no Mar Ageu.
                                    Ela foi devastada por uma erupção vulcânica no século 16 A.C.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="swiper-button-next">
                        <i className='bx bx-chevron-right'></i>
                    </div>
                    <div className="swiper-button-prev">
                        <i className='bx bx-chevron-left'></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Popular;