import React from 'react'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <span>E.LEARNIA</span>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>
                    <button className='btnLogin'>Sign in</button>
                </li>
            </ul>
        </nav>
    )
}