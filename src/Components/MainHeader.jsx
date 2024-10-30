import React, {useState} from 'react'
import {Link, NavLink } from 'react-router-dom';
import logo from '../Assets/slash.png'
import { FaBars} from "react-icons/fa";
import { RiCloseFill} from "react-icons/ri";



const MainHeader = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
        document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    };
    const [activeNav, setActiveNav] = useState('/')


    const closeMenuBar = () => {
        setClick(false);
        document.body.style.overflow = 'auto'; // Enable scrolling

    
      };

  return (
    <div className='main-header'>
        <header>
            <nav>
                <div className="m-logo">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>

                <ul className={click ? 'menu active' : 'menu'}>
                    <div className='list1'>
                        <li><NavLink to='/' activeclassName = 'active' onClick={closeMenuBar}>Home</NavLink></li>
                        <li><NavLink to='/about' activeclassName = 'active' onClick={closeMenuBar}>About Us</NavLink></li>
                        <li><NavLink to='/faq' activeclassName = 'active' onClick={closeMenuBar}>FAQs</NavLink></li>
                        <li><NavLink to='/contact' activeclassName = 'active' onClick={closeMenuBar}>Contact Us</NavLink></li>
                    </div>

                    <div className='list2'>
                        <li><NavLink to='/login'>Login as a vendor</NavLink></li>
                        <li className='btn'><NavLink to='/admin'>Get the app</NavLink></li>
                    </div>
                </ul>

                <div className='bars' onClick={handleClick}>
                    {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' style={{color:'#ee2a7b'}}/>)}
                    
                </div>
            </nav>
        </header>
    </div>
  )
}

export default MainHeader