import React from "react";
import Contact from "../page/Contact";
import Home from '../page/Home'
import Logo from '../page/Logo'
import Popular from '../page/Popular'
import Subscribe from "../page/Subscribe";
import Value from "../page/Value";

const Main = () => {
    return(
        <main className="main">
            <Home />
            <Logo />
            <Popular />
            <Value />
            <Contact />
            <Subscribe />
        </main>
    );
}

export default Main;