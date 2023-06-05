import { Link } from "react-router-dom";

import React from 'react';
const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Ejemplo1">Ejemplo 1</Link></li>
                <li><Link to="/Ejemplo2">Ejemplo 2</Link></li>
                <li><Link to="/Ejemplo3">Ejemplo 3</Link></li>
            </ul>
    
        </nav>

    )
}

export default Nav