import React from "react";
import Logo1 from '../img/logo1.png';
import Logo2 from '../img/logo2.png';
import Logo3 from '../img/logo3.png';
import Logo4 from '../img/logo4.png';

const Logo = () => {
    return(
        <section className="logos section">
            <div className="logos_container container grid" data-testid="logo">
                <div className="logos_img">
                    <img src={Logo1} alt="Logomarca de CVC" />
                </div>
                <div className="logos_img">
                    <img src={Logo2} alt="Logomarca de Latam Airlines" />
                </div>
                <div className="logos_img">
                    <img src={Logo3} alt="Logomarca de Decolar.com" />
                </div>
                <div className="logos_img">
                    <img src={Logo4} alt="Logomarca de Trivago" />
                </div>
            </div>
        </section>
    );
}

export default Logo;