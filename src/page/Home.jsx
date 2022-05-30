import React from "react";

const Home = () => {
    return(
        <main className="main">
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_data">
                        <h1 className="home_title">
                            Encontre <br/> Os melhores lugares <br/> Para se visitar
                        </h1>
                        <p className="home_description">
                            Se sua vontade é viajar sem complicações você encontrou o lugar certo, vamos te levaremos a lugares inesquecíveis.
                        </p>
                        <form action="" className="home_search">
                            <i className='bx bx-map'></i>
                            <input type="search" placeholder="Qual seu próximo destino?" className="home_search_input" />
                            <button className="button">Buscar</button>
                        </form>
                        <div className="home_value">
                            <div>
                                <h1 className="home_value_number">
                                    9K<span>+</span>
                                </h1>
                                <span className="home_value_description">
                                    Lugares <br/> Disponíveis
                                </span>
                            </div>
                            <div>
                                <h1 className="home_value_number">
                                    2K<span>+</span>
                                </h1>
                                <span className="home_value_description">
                                    Recomendações <br/> Positivas
                                </span>
                            </div>
                            <div>
                                <h1 className="home_value_number">
                                    28K<span>+</span>
                                </h1>
                                <span className="home_value_description">
                                    Prêmios <br/> Ganhos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;