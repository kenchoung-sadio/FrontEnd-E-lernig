import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <Link className='span'>E.LEARNIA</Link>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>
                    <button className='btnLogin'><Link to='/login' style={{textDecoration: 'none', color: '#FFFFFF'}}>Sign in</Link></button>
                </li>
            </ul>
        </nav>
    )
}