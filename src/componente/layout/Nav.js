import { Link } from "react-router-dom";

import React from 'react';
const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><link to="/"/>Home</li>
                <li><link to="/ejemplo1"/>Ejemplo 1</li>
                <li><link to="/ejemplo2"/>Ejemplo 2</li>
                <li><link to="/ejemplo3"/>Ejemplo 3</li>
            </ul>
    
        </nav>

    )
}

export default Nav