import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink activeClassName='' to={'/'}>home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='' to={'/about'}>about</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='' to={'/login'}>login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
