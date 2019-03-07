import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/team/2'>Team</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    </nav>
    )
}

export default NavBar