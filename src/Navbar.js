import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
 const navigate = useNavigate();
  return (
    <div className='Navbar'>
        <div className='content-navbar'>
            <div className='logo-navbar'>
                <img src={require('./log-navbar.png')} />
            </div>
            <div className='buttons-navbar'>      
                <button id='hexagon' onClick={()=>navigate('/')}>
                    Home
                </button>
            </div>

        </div>     
    </div>
  )
}

export default Navbar
