import React from "react";

const Header = () => {
    return(
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">
                    Viagem <i className='bx bxs-plane-alt'></i>
                </a>
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item"><a href="#" className="nav_link"><span></span></a></li>
                        <li className="nav_item"><a href="#" className="nav_link"><span></span></a></li>
                        <li className="nav_item"><a href="#" className="nav_link"><span></span></a></li>
                        <li className="nav_item"><a href="#" className="nav_link"><span></span></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;