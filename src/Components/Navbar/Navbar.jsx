import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../asset/logo.png'
import menu_icon from '../../asset/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  let [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 550 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  let toggleMenu = (e) =>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} id='logo' alt="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-220} duration={500}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="menu-icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
