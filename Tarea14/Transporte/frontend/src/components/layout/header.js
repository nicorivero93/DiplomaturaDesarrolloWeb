import React from 'react';
import '../../styles/components/layout/header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/logo.png" width="100" alt="Transportes X" />
                <h1>Transportes x</h1>
            </div>
         </header>
    );
}

export default Header;