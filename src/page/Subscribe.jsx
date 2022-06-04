import React from "react";

const Subscribe = () => {
    return(
        <section className="subscribe section">
           <div className="subscribe_container container">
               <h1 className="subscribe_title" data-testid='titulo'>
                   Garanta Sua Passagem
               </h1>
               <p className="subscribe_description" data-testid='description'>
                Assine e encontre preço super atrativo e
                Contato de nós. Encontre sua passagem certa.
               </p>
               <a href="#" className="container subscribe_button button" data-testid='button'>
                   Cadastrar
               </a>
           </div>
        </section>
    );
}

export default Subscribe;