import React, { useRef, useState }  from "react";

const Accordion = () => {
    const value = useRef(null);
    const valueItem = useRef(null);
    const [accordionOpen, serAccconrdionOpen] = useState(false);

    const onClickValue = () => {
        const accordionContent = value.current;
        const accordion = valueItem.current;
        if (accordion.classList.contains('accordion_open')) {
            accordionContent.removeAttribute('style');
            serAccconrdionOpen(false)
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + 'px'
            serAccconrdionOpen(true)
        }
    }
    return(
        <div
            className={accordionOpen ? "value_accordion_item accordion_open" :"value_accordion_item"}
            ref={valueItem}
        >
                            <header
                                className="value_accordion_header"
                                onClick={onClickValue}
                            >
                                <i className='bx bxs-shield-x value_accordion_icon'></i>
                                <h3 className="value_accordion_title">
                                    As melhores taxas de juros do mercado
                                </h3>
                                <div className="value_accordion_arrow">
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                            </header>
                            <div
                                className="value_accordion_content"
                                ref={value}
                            >
                                <p className="value_accordion_description">
                                O preço que fornecemos é o melhor para você,
                                garantimos nenhuma alteração de preço em sua viajem devido
                                a vários custos inesperados que podem surgir.
                                </p>
                            </div>
                        </div>
    );
}

export default Accordion;