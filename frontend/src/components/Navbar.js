import React, { useState } from 'react';
import {IconContext} from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [click, setclick] = useState(false);
    

    const handleClick = () => setclick(!click);
    const closeMenu = () => setclick(false);

   

    

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="row">
            <div>
                <Link to="/" className="brand"> Aqua_M </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                {click? <FaTimes/> : <FaBars />}
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li onClick={closeMenu}>
                    <Link to ='/About' className='nav-links'>About us</Link>
                </li>
                <li onClick={closeMenu}>
                    <Link to ='/' className='nav-links'>Home</Link>
                </li>
               
            </ul>
            
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
