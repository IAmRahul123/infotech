import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../Assets/union2.svg'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' spy={true} smooth={true} offset={50} duration={500} className='logo'>
                    <img src={logo} alt='logo' />
                    <a>Infotech</a>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#000' }} />)
                        : (<FaBars size={30} style={{ color: '#000' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        {/* <Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link> */}
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        {/* <Link to="services" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Service</Link> */}
                        <a href='/' onClick={closeMenu}>Service</a>
                    </li>
                    <li className='nav-item'>
                        {/* <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Blog</Link> */}
                        <a href='/' onClick={closeMenu}>Blog</a>
                    </li>
                    <li className='nav-item'>
                        {/* <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Portfolio</Link> */}
                        <a href='/' onClick={closeMenu}>Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        {/* <Link to="demo" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link> */}
                        <a href='/' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
