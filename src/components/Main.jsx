import React from "react";
import Home from '../page/Home'
import Logo from '../page/Logo'
import Popular from '../page/Popular'

const Main = () => {
    return(
        <main className="main">
            <Home />
            <Logo />
            <Popular />
        </main>
    );
}

export default Main;