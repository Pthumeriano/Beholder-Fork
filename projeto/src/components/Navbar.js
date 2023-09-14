import React from 'react'
import Logo from './Logonavbar.png';
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>   
        </div>         
        <div className='rightSide'>
            <Link to = "/ajuda"> Ajuda </Link>
            <Link to = "/entrar"> Entrar </Link>
        </div>
    </div>
  )
}

export default Navbar