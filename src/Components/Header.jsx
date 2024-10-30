import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/slash.png'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <button><Link to='/signup'>Register</Link></button>
                <button className='btn'><Link to='/login'>Login</Link></button>
            </ul>
        </nav>
    </div>
  )
}

export default Header