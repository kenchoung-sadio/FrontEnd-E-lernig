import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <Link className='span'>E.LEARNIA</Link>
            <ul>
                <li><Link to='/login' style={{textDecoration: 'none', color: '#FFFFFF'}} >Home</Link></li>
                <li><Link to='/login' style={{textDecoration: 'none', color: '#FFFFFF'}} >About Us</Link></li>
                <li><Link to='/login' style={{textDecoration: 'none', color: '#FFFFFF'}} >Courses</Link></li>
                <li>
                    <button className='btnLogin'><Link to='/login' style={{textDecoration: 'none', color: '#FFFFFF'}}>Sign in</Link></button>
                </li>
            </ul>
        </nav>
    )
}