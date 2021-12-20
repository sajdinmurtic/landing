import React, { useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <nav className = 'navbar navbar-light '>
        <div className='nav-container'>
            
            <Link to="/" className='nav-logo'>Company</Link>

<ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='item'>
        <Link to="/"
        className='nav-links'
        onClick={handleClick}>
            Main
        </Link>
    </li>
    <li className='item'>
        <Link to="/features"
        className='nav-links'
        onClick={handleClick}>
            Features
        </Link>
    </li>
    <li className='item'>
        <Link to="/services"
        className='nav-links'
        onClick={handleClick}>
            Services
        </Link>
    </li>
    <li className='item'>
        <Link to="/testimonials"
        className='nav-links'
        onClick={handleClick}>
            Testimonials
        </Link>
    </li>

</ul>

        </div>
        
        </nav>
    )
}
export default Navbar;