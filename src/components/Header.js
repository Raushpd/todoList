import React from 'react';

import logo from "../assets/images/logo.png"
import '../../src/App.scss';

const Header = () => {
    return (

        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="Todo"></img>

                </div>
            </nav>
        </header>

    );
};

export default Header;