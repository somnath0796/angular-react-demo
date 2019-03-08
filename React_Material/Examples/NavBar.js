import React from 'react';

import { NavLink } from 'react-router-dom';

/**
 * NavLink is a Component
 * to is a prop
 */
const NavBar = () => {
    return(
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    </nav>
    )
}

export default NavBar