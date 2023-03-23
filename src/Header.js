import React, { useEffect, useState } from 'react'
import './Header.css'

import Button from 'react-bootstrap/Button';
import LogoR from './assets/plane.jpg'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  
  const [login,setLogin]=useState(false);
  const Logout="Logout";
  const Login="Login";

// eslint-disable-next-line
  useEffect(()=>{
    if(localStorage.getItem("name")){
      setLogin(true);
    }
  })
  const logout=()=>{
    localStorage.removeItem("name");
    
    window.location.reload(false);
  }
  return (
    <div className='header'>
        <div className='img-contain'>
          <Link to="/">
        <img src={LogoR} alt='airplane logo' className='logoimg'/>
        </Link>
        <h1 className='logo-header'>Airbus</h1>
        </div>
        <div className='navbar'>
            <ul>
              
                
                
                
               
                <Navbar.Collapse id="navbarScroll">
                <Button variant="outline-success" onClick={logout}>{login?Logout:Login}</Button>
                </Navbar.Collapse>
            </ul>
        </div>
    </div>
  )
}

export default Header