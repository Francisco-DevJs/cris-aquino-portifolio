import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
     
         
        <div className='navbar-container '>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Cris Aquino
            <i className='fas fa-mug-hot' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item '>
              <NavLink to='/home' className='nav-links ' onClick={closeMobileMenu} activeClassName='active' >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='active'
                >
                Encomendas
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/bio'
                className='nav-links'
                onClick={closeMobileMenu}
                activeClassName='active'
                >
                Bio
              </NavLink>
              <li>
                <NavLink 
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                >
                Contatos
                </NavLink>
              </li>
            </li>
          </ul>
          {button && <Button buttonStyle='btn' path='/contact'>Contatos</Button>}
        </div>

      </nav>
    </>
  );
}

export default Navbar;