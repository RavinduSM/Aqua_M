import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';
import { MdAccountCircle } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  const userSignin = useSelector((state) => state.userSignin);
  const {userData} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdAccountCircle className='navbar-icon' />
              Ravindu_M
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/product'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              
              {/* <li className='nav-item'>
                {userData ? (
                  <Link to="#">{userData.name}</Link>
                ): (
                  <Link to="/signin">Sign In</Link>
                )}
              </li> */}
              <li className='nav-item'>
                {userData? (
                  <div className="dropdown">
                     <Link to="#"  className='nav-links' onClick={closeMobileMenu}>{userData.name}
                      <i className='fa fa-caret-down'></i>
                      </Link>
                      <ul className='dropdown-link'>
                        <Link to='#signout' onClick={signoutHandler}>Signout</Link>
                      </ul>
                      <ul className='dropdown-link'>
                        <Link to='/dashboard' onClick={signoutHandler}>Profile</Link>
                      </ul>
                      
                  </div>                 
                ) : (
                  <Link 
                    to ='/signin'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                      Signin
                  </Link>
                )}
               
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
