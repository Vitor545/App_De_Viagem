import React from "react";
import Home from '../page/Home'
import Logo from '../page/Logo'
import Popular from '../page/Popular'
import Value from "../page/Value";

const Main = () => {
    return(
        <main className="main">
            <Home />
            <Logo />
            <Popular />
            <Value />
        </main>
    );
}

export default Main;