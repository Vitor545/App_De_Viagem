import React from "react";
import Accordion from "../components/Accordion";
import Accordion2 from "../components/Accordion2";
import Accordion3 from "../components/Accordion3";
import Accordion4 from "../components/Accordion4";
import Values from '../img/value.jpg';

const Value = () => {
    
    return(
        <section className="value section" id="value">
            <div className="value_container container grid">
                <div className="value_images">
                    <div className="value_orbe"></div>
                    <div className="value_img">
                        <img src={ Values } alt="" />
                    </div>
                </div>
                <div className="value_content">
                    <div className="value_data">
                        <span className="section_subtitle">Nossos Valores</span>
                        <h2 className="section_title">
                            Valor Que Damos a Você<span>.</span>
                        </h2>
                        <p className="value_description">
                            Estamos sempre prontos para ajudar, fornecendo o melhor serviço para você.
                            Acreditamos que todos merecem viajar por um preço justo e com qualidade.
                        </p>
                    </div>
                    <div className="value_accordion">
                        <Accordion/>
                        <Accordion2/>
                        <Accordion3/>
                        <Accordion4/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Value;